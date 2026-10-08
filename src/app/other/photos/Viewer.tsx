"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { frameNumber, slides } from "./photos";

export default function Viewer() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const slide = slides[index];
  const caption = Array.from(new Set(slide.map((p) => p.caption))).join(" / ");
  const step = (d: number) => setIndex((i) => (i + d + total) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  return (
    <div className="flex max-w-2xl flex-col">
      <button
        onClick={() => step(1)}
        aria-label="next photo"
        className="flex aspect-[3/2] w-full cursor-e-resize justify-center gap-2"
      >
        {slide.map((photo) => (
          <div
            key={photo.src}
            className="relative h-full max-w-full"
            style={{ aspectRatio: photo.width / photo.height }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes={
                slide.length === 2
                  ? "(min-width: 768px) 336px, 50vw"
                  : "(min-width: 768px) 672px, 100vw"
              }
              className="object-cover animate-fadeIn"
              priority
            />
          </div>
        ))}
      </button>
      <div className="mt-3 flex items-baseline justify-between gap-4 font-mono text-xs">
        <span className="opacity-70">{caption}</span>
        <span className="shrink-0">
          <button
            onClick={() => step(-1)}
            className="mr-3 hover:text-yellow-400"
          >
            ←
          </button>
          {frameNumber(index)} / {frameNumber(total - 1)}
          <button
            onClick={() => step(1)}
            className="ml-3 hover:text-yellow-400"
          >
            →
          </button>
        </span>
      </div>
    </div>
  );
}
