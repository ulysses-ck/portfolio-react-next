"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CursorShape = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
};

const SHAPE_SIZE = 84;
const LERP = 0.1;
const TRAIL_STEPS = 7;

const LandingBackground = () => {
  const [trail, setTrail] = useState<CursorShape[]>(() =>
    Array.from({ length: TRAIL_STEPS }, () => ({
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
    })),
  );

  const mouseRef = useRef({ x: 0, y: 0 });
  const leadRef = useRef<CursorShape>({
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
  });
  const trailRef = useRef<CursorShape[]>(
    Array.from({ length: TRAIL_STEPS }, () => ({
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
    })),
  );
  const seedRef = useRef({ phase: 0.35, speed: 0.012, swirl: 36, spin: 0.4 });

  useEffect(() => {
    const updateSeed = () => {
      seedRef.current = {
        phase: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.01,
        swirl: 24 + Math.random() * 30,
        spin: 0.22 + Math.random() * 0.42,
      };
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const center = { x: globalThis.innerWidth / 2, y: globalThis.innerHeight / 2 };
    mouseRef.current = center;
    leadRef.current = { x: center.x, y: center.y, rotation: 0, scale: 1 };
    trailRef.current = Array.from({ length: TRAIL_STEPS }, () => ({
      x: center.x,
      y: center.y,
      rotation: 0,
      scale: 1,
    }));
    setTrail(trailRef.current);

    updateSeed();
    const proceduralTimer = globalThis.setInterval(updateSeed, 2800);
    globalThis.addEventListener("mousemove", onMouseMove);

    let rafId = 0;
    const render = () => {
      const time = performance.now();
      const seed = seedRef.current;

      const baseX = mouseRef.current.x;
      const baseY = mouseRef.current.y;
      const wave = Math.sin(time * seed.speed + seed.phase);
      const wave2 = Math.cos(time * seed.speed * 0.85 + seed.phase);
      const offsetX = wave * seed.swirl;
      const offsetY = wave2 * (seed.swirl * 0.7);

      leadRef.current.x += (baseX + offsetX - leadRef.current.x) * LERP;
      leadRef.current.y += (baseY + offsetY - leadRef.current.y) * LERP;
      leadRef.current.rotation = wave * 18 + time * seed.spin * 0.02;
      leadRef.current.scale = 0.98 + (wave + 1) * 0.025;

      const nextTrail = [...trailRef.current];
      nextTrail[0] = {
        x: leadRef.current.x,
        y: leadRef.current.y,
        rotation: leadRef.current.rotation,
        scale: leadRef.current.scale,
      };

      for (let i = 1; i < nextTrail.length; i += 1) {
        const prev = nextTrail[i - 1];
        const current = nextTrail[i];
        const followFactor = 0.22 - i * 0.02;
        const clampedFollow = Math.max(followFactor, 0.08);

        nextTrail[i] = {
          x: current.x + (prev.x - current.x) * clampedFollow,
          y: current.y + (prev.y - current.y) * clampedFollow,
          rotation: current.rotation + (prev.rotation - current.rotation) * 0.18,
          scale: Math.max(0.78, prev.scale - i * 0.035),
        };
      }

      trailRef.current = nextTrail;
      setTrail(nextTrail);

      rafId = globalThis.requestAnimationFrame(render);
    };

    rafId = globalThis.requestAnimationFrame(render);

    return () => {
      globalThis.clearInterval(proceduralTimer);
      globalThis.removeEventListener("mousemove", onMouseMove);
      globalThis.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 animated-bg" />

      <div className="pointer-events-none fixed inset-0">
        {trail
          .slice()
          .reverse()
          .map((shape, reverseIndex) => {
            const index = trail.length - 1 - reverseIndex;
            const opacity = 0.08 + (index + 1) / trail.length / 2.2;
            const borderClass =
              index === 0 ? "border-primary/55" : "border-primary/25";

            return (
              <motion.div
                key={`trail-${index}`}
                className={`absolute rounded-xl border ${borderClass}`}
                style={{
                  width: SHAPE_SIZE,
                  height: SHAPE_SIZE,
                  left: shape.x - SHAPE_SIZE / 2,
                  top: shape.y - SHAPE_SIZE / 2,
                  rotate: shape.rotation,
                  scale: shape.scale,
                  opacity,
                  boxShadow:
                    index === 0
                      ? "0 0 28px hsl(175 80% 50% / 0.22)"
                      : "none",
                }}
              >
                {index === 0 && (
                  <div className="absolute inset-3 rounded-md border border-primary/30" />
                )}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default LandingBackground;
