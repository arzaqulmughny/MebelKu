export default function Advantage() {
  const advantages = [
    {
      icon: "/assets/icons/truck-fill.svg",
      title: "Biaya Pengiriman Gratis",
    },
    {
      icon: "/assets/icons/refund-line.svg",
      title: "Garansi Pengembalian/Tukar",
    },
    {
      icon: "/assets/icons/verified-badge-fill.svg",
      title: "Kualitas Produk yang Baik",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-bold text-(--text-light)">
          Kelebihan Kami
        </h1>
        <ul className="flex flex-col gap-y-3">
          {advantages.map((advantage, index) => (
            <li
              key={index}
              className="bg-white border border(--border-light) w-full flex items-center gap-x-5 py-3 px-4 rounded-xl"
            >
              <div className="flex items-center justify-center w-10 aspect-square rounded-full bg-(--primary)/20">
                <span
                  className="w-5 h-5 inline-block"
                  style={{
                    WebkitMaskImage: `url(${advantage.icon})`,
                    maskImage: `url(${advantage.icon})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    backgroundColor: "var(--primary)",
                  }}
                />
              </div>
              <p className="text-sm font-medium text-(--text-light)">
                {advantage.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
