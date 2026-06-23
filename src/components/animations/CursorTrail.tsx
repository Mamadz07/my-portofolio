"use client";

import { useEffect, useRef } from "react";

const JAPANESE_CHARS = [
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土",
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
];

type Particle = {
  x: number;
  y: number;
  char: string;
  opacity: number;
  size: number;
  rotation: number;
  velocityY: number;
};

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const createParticle = (
      x: number,
      y: number
    ) => {
      const randomChar =
        JAPANESE_CHARS[
          Math.floor(
            Math.random() *
              JAPANESE_CHARS.length
          )
        ];

      particles.push({
        x,
        y,
        char: randomChar,
        opacity: 1,
        size: Math.random() * 14 + 12,
        rotation: Math.random() * 360,
        velocityY:
          Math.random() * 0.4 + 0.2,
      });
    };

    let lastSpawn = 0;

    const handleMove = (
      event: MouseEvent
    ) => {
      const now = Date.now();

      if (now - lastSpawn < 25) return;

      lastSpawn = now;

      createParticle(
        event.clientX,
        event.clientY
      );
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      for (
        let i = particles.length - 1;
        i >= 0;
        i--
      ) {
        const p = particles[i];

        p.opacity -= 0.015;
        p.y -= p.velocityY;
        p.rotation += 0.6;

        if (p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();

        ctx.translate(p.x, p.y);
        ctx.rotate(
          (p.rotation * Math.PI) / 180
        );

        ctx.font = `bold ${p.size}px sans-serif`;

        ctx.fillStyle = `rgba(
          255,
          107,
          0,
          ${p.opacity}
        )`;

        ctx.shadowColor =
          "rgba(255,107,0,0.8)";

        ctx.shadowBlur = 18;

        ctx.fillText(
          p.char,
          0,
          0
        );

        ctx.restore();
      }

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        pointer-events-none
        z-[999]
      "
    />
  );
}