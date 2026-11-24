'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import { useTheme } from '@/src/components/theme-provider';

const vertex = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
precision highp float;

varying vec2 vUv;
uniform float uTime;
uniform vec2 uPointer;
uniform vec2 uRes;
uniform float uAlpha;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.55;
  for (int i = 0; i < 5; i++) {
    value += amp * noise(p);
    p = p * 2.03 + vec2(11.3, 7.1);
    amp *= 0.52;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uRes.x / max(uRes.y, 1.0), 1.0);
  vec2 p = uv * aspect;
  float t = uTime * 0.045;

  vec2 q = p * vec2(2.2, 3.4);
  q.y -= t * 3.1;
  q.x += sin(t * 1.7) * 0.22;
  q += (uPointer - 0.5) * vec2(0.5, 0.3);

  float n1 = fbm(q + vec2(0.0, fbm(q * 1.6 + t) * 1.2));
  float n2 = fbm(q * 2.4 - vec2(t * 0.8, 0.0));
  float band = smoothstep(0.42, 0.95, n1 * 0.72 + n2 * 0.42);

  vec2 c = uv - vec2(0.5, 0.52);
  c.x *= 1.35;
  c.y *= 0.75;
  float mask = 1.0 - smoothstep(0.05, 0.62, length(c));
  mask *= smoothstep(0.02, 0.22, uv.y);
  mask *= smoothstep(0.0, 0.16, uv.x) * smoothstep(0.0, 0.16, 1.0 - uv.x);

  vec3 ember = vec3(0.95, 0.56, 0.24);
  vec3 smoke = vec3(0.55, 0.34, 0.18);
  vec3 color = mix(smoke, ember, smoothstep(0.3, 1.0, n2));
  float alpha = band * mask * uAlpha;

  gl_FragColor = vec4(color, alpha);
}
`;

export function VaporField() {
  const hostRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== 'dark') return;

    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let disposed = false;
    let stop: (() => void) | undefined;

    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.tx = Math.min(
        Math.max((event.clientX - rect.left) / rect.width, 0),
        1
      );
      pointer.ty = Math.min(
        Math.max((event.clientY - rect.top) / rect.height, 0),
        1
      );
    };

    host.addEventListener('pointermove', onPointerMove);

    import('ogl')
      .then(({ Renderer, Program, Mesh, Triangle }) => {
        if (disposed) return;

        const renderer = new Renderer({
          alpha: true,
          antialias: false,
          dpr: Math.min(window.devicePixelRatio || 1, 1.5),
        });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);

        const canvas = gl.canvas as HTMLCanvasElement;
        canvas.className = 'vapor-canvas';
        canvas.setAttribute('aria-hidden', 'true');
        host.appendChild(canvas);
        document.documentElement.classList.add('gl-on');

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
          vertex,
          fragment,
          transparent: true,
          depthTest: false,
          depthWrite: false,
          uniforms: {
            uTime: { value: 0 },
            uPointer: { value: [0.5, 0.5] },
            uRes: { value: [1, 1] },
            uAlpha: { value: 0.58 },
          },
        });
        const mesh = new Mesh(gl, { geometry, program });

        let visible = true;
        const resize = () => {
          const rect = host.getBoundingClientRect();
          renderer.setSize(Math.max(rect.width, 1), Math.max(rect.height, 1));
          program.uniforms.uRes.value = [
            Math.max(rect.width, 1),
            Math.max(rect.height, 1),
          ];
        };
        resize();

        const observer = new ResizeObserver(resize);
        observer.observe(host);

        const intersection = new IntersectionObserver(
          entries => {
            visible = entries[0]?.isIntersecting ?? true;
          },
          { threshold: 0 }
        );
        intersection.observe(host);

        let previous = performance.now() / 1000;
        const tick = () => {
          if (!visible || document.hidden) {
            previous = performance.now() / 1000;
            return;
          }

          const now = performance.now() / 1000;
          const delta = Math.min(now - previous, 0.05);
          previous = now;

          pointer.x += (pointer.tx - pointer.x) * 0.035;
          pointer.y += (pointer.ty - pointer.y) * 0.035;

          program.uniforms.uTime.value += delta;
          program.uniforms.uPointer.value = [pointer.x, 1 - pointer.y];

          renderer.render({ scene: mesh });
        };

        gsap.ticker.add(tick);

        stop = () => {
          gsap.ticker.remove(tick);
          observer.disconnect();
          intersection.disconnect();
          canvas.remove();
          document.documentElement.classList.remove('gl-on');
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
      })
      .catch(() => {
        // A quiet page is a valid fallback when WebGL is unavailable.
      });

    return () => {
      disposed = true;
      host.removeEventListener('pointermove', onPointerMove);
      stop?.();
    };
  }, [theme]);

  return (
    <div
      ref={hostRef}
      aria-hidden='true'
      className='pointer-events-none absolute inset-0 z-[2]'
    />
  );
}
