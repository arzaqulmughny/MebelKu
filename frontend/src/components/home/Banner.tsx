"use client";
import { useEffect, useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}
const ButtonNavigator = ({ direction, ...props }: ButtonProps) => {
  return (
    <button
      className={`absolute top-1/2 ${
        direction === "left" ? "left-10" : "right-10 rotate-180"
      } transform -translate-y-1/2 text-black font-bold text-lg bg-white/70 w-10 aspect-square rounded-full flex items-center justify-center hover:bg-white cursor-pointer transition-all duration-300`}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4"
      >
        <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
      </svg>
    </button>
  );
};

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
      <div>
        <div
          className="relative flex flex-col justify-end md:justify-center md:items-center px-3 py-2 gap-y-5 border w-full aspect-video md:aspect-16/5 rounded-xl bg-cover bg-center bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0))] max-w-[1440] mx-auto"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${data[currentImage].image})`,
          }}
        >
          <ButtonNavigator direction="left" onClick={() => setCurrentImage((prevImage) => (prevImage - 1 + data.length) % data.length)} />
          <ButtonNavigator direction="right" onClick={() => setCurrentImage((prevImage) => (prevImage + 1) % data.length)} />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-white font-bold text-lg leading-tight md:text-2xl lg:text-4xl">
              {data[currentImage].title}
            </h1>
            <p className="text-sm text-white md:text-base lg:text-lg">
              {data[currentImage].description}
            </p>
          </div>

          <div className="flex gap-x-2 md:hidden">
            {data.map((_, index) => {
              const isActive = index === currentImage;
              const classes = [
                "h-0.5",
                "w-full",
                "transition-all",
                "duration-300",
                isActive
                  ? "bg-(--primary) flex-1"
                  : "bg-(--border-light) flex-2",
              ].join(" ");

              return (
                <button key={index} type="button" className={classes}></button>
              );
            })}
          </div>
        </div>

        <ul className="flex justify-center gap-x-2">
          {data.map((dataItem, index) => {
            const active = currentImage === index;
            return (
              <li key={index}>
                <button
                  onClick={() => setCurrentImage(index)}
                  className={`transition-all duration-300 h-2 rounded-full cursor-pointer ${
                    active ? "w-5 bg-(--primary)" : "w-2 bg-(--border-light)"
                  }`}
                ></button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
