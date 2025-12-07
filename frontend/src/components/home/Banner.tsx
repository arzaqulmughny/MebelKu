"use client";
import { useEffect, useState } from "react";

export default function Slider() {
  const data = [
    {
      title: "Koleksi Terbaru: Ruang Tamu Modern",
      description: "Temukan inspirasi untuk ruang tamu Anda",
      image: "/assets/images/banner-1.jpg",
    },
    {
      title: "Promo Spesial: Dapatkan 20% Diskon",
      description: "Dapatkan 20% diskon untuk semua produk",
      image: "/assets/images/banner-2.jpg",
    },
    {
      title: "Event Terbatas: Diskon Hingga 12 Oktober",
      description: "Dapatkan 20% diskon untuk semua produk",
      image: "/assets/images/banner-3.jpg",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="flex flex-col justify-end px-3 py-2 gap-y-5 border w-full aspect-video rounded-xl bg-cover bg-center bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0))]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${data[currentImage].image})`,
        }}
      >
        <div className="flex flex-col gap-y-2">
          <h1 className="text-white font-bold text-lg leading-tight">
            {data[currentImage].title}
          </h1>
          <p className="text-sm text-white">
            {data[currentImage].description}
          </p>
        </div>

        <div className="flex gap-x-2">
          {data.map((_, index) => {
            const isActive = index === currentImage;
            const classes = [
              "h-0.5",
              "w-full",
              "transition-all",
              "duration-300",
              isActive ? "bg-(--primary) flex-1" : "bg-(--border-light) flex-2",
            ].join(" ");

            return (
              <button key={index} type="button" className={classes}></button>
            );
          })}
        </div>
      </div>
    </>
  );
}
