import Button from "../Button";

const categories = [
  {
    href: "#",
    name: "Sofa",
  },
  {
    href: "#",
    name: "Kursi",
  },
  {
    href: "#",
    name: "Meja",
  },
  {
    href: "#",
    name: "Lampu",
  },
];

export default function ExploreCategory() {
  return (
    <>
      <div className="flex flex-col gap-y-4 w-full">
        <h1 className="text-xl font-bold text-(--text-light)">
          Jelajahi Berdasarkan Kategori
        </h1>

        <div className="flex flex-col gap-y-5 w-full">
          <ul className="flex gap-4 overflow-auto scrollbar-none">
            {categories.map((category, index) => (
              <li key={index} className="min-w-[200px]">
                <div
                  className="text-(--text-light) aspect-square flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
                  // style={{ backgroundImage: "url(/assets/images/banner-1.jpg)", }}
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(/assets/images/banner-1.jpg)",
                  }}
                >
                  <p className="text-white text-lg font-bold">
                    {category.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="w-full flex justify-center">
            <div className="flex justify-center max-w-[250px] w-full">
              <Button>Tampilkan Semua Kategori</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
