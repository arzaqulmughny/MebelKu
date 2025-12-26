"use client";

import { useState, useRef, useEffect } from "react";

export default function Slider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const isDown = useRef(false);

  const move = (dir: number) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  const start = (x: number) => {
    isDown.current = true;
    startX.current = x;
  };

  const end = (x: number) => {
    if (!isDown.current) return;
    isDown.current = false;

    const diff = x - startX.current;
    if (Math.abs(diff) < 40) return;

    move(diff < 0 ? 1 : -1);
  };

  return (
    <div
      className="w-full aspect-video md:aspect-square relative overflow-hidden select-none flex items-end md:rounded-xl"
      onTouchStart={(e) => start(e.touches[0].clientX)}
      onTouchEnd={(e) => end(e.changedTouches[0].clientX)}
      onMouseDown={(e) => start(e.clientX)}
      onMouseUp={(e) => end(e.clientX)}
      onMouseLeave={(e) => end(e.clientX)}
    >
      <img
        src={images[index]}
        className={`w-full h-full object-cover pointer-events-none`}
      />

      <div className="flex gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
        {images.map((_, itemIndex) => (
          <button
            key={itemIndex}
            type="button"
            className={`w-2 aspect-square  rounded-full ${
              itemIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
