import Link from "next/link";
import Button from "../Button";

const ArticleCard = () => {
  return (
    <>
      <div className="bg-white border border-(--border-color) rounded-xl overflow-hidden w-full">
        <img src="/assets/images/banner-2.jpg" alt="" />

        <div className="p-4 flex flex-col gap-y-3">
          <h2 className="text-sm text-(--text-light)/70">Dekorasi</h2>
          <h1 className="text-lg font-bold text-(--text-light)">
            Cara Merawat Furnitur Kayu Agar Tahan Lama
          </h1>
          <p className="text-sm text-(--text-light)/70">
            Pelajari cara terbaik untuk merawat furnitur dan mewarnai rumahmu
            dengan gaya yang unik.
          </p>
          <Link
            href="/"
            className="flex items-center gap-x-2 text-sm text-(--primary)"
          >
            Baca Selengkapnya
            <div className="w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default function Article() {
  return (
    <>
      <div className="flex flex-col gap-y-4 w-full">
        <h1 className="text-xl font-bold text-(--text-light)">
          Artikel & Inspriasi
        </h1>

        <ul className="flex gap-4 overflow-auto scrollbar-none">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="flex-1 min-w-[300px]">
              <ArticleCard />
            </li>
          ))}
        </ul>

        <div className="w-full flex justify-center">
          <div className="flex justify-center max-w-[250px] w-full">
            <Button>Tampilkan Semua Artikel</Button>
          </div>
        </div>
      </div>
    </>
  );
}
