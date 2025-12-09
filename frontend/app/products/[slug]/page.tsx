import { products } from "@/src/components/home/FeaturedProduct";
import ProductCard, { Rating, Star } from "@/src/components/ProductCard";
import ColorVariant from "@/src/components/products/[slug]/ColorVariant";
import Slider from "@/src/components/products/[slug]/Slider";
import Link from "next/link";

const images = [
  "/assets/images/banner-1.jpg",
  "/assets/images/banner-2.jpg",
  "/assets/images/banner-3.jpg",
];

export function generateStaticParams() {
  return [
    {
      slug: "sofa-modern",
    },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Slider images={images} />

      <div className="p-3 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-bold text-(--text-light)">Sofa Modern</h1>

          <div className="flex justify-between items-start">
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <del className="text-xs text-(--text-light)/40 line-through">
                  Rp. 1.500.000
                </del>
                <p className="text-green-500 text-lg font-bold">
                  Rp. 1.200.000
                </p>
              </div>

              <div className="bg-red-100 text-red-500 w-fit h-fit px-1.5 py-0.5 rounded text-xs">
                -30%
              </div>
            </div>

            <div className="flex items-center gap-x-1">
              <Star fillPercent={100} />
              <p className="font-bold text-sm text-(--text-light)">4.5</p>
              <p className="text-sm text-slate-400">(128 reviews)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-(--text-light) font-bold text-sm">Pilih Warna</h2>
          <ColorVariant />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-(--text-light) font-bold text-sm">Deskripsi</h2>
          <p className="text-sm text-(--text-light)/80">
            Sofa modern ini memiliki desain yang modern dan minimalis. Sofa ini
            memiliki 2 tempat duduk dan 1 tempat tidur. Sofa ini memiliki
            panjang 2,5 m dan lebar 1,5 m. Kelebihan dari sofa ini adalah
            memiliki desain yang modern dan minimalis.
            <span>
              <button className="text-sm text-(--primary) font-bold">
                Baca Selengkapnya
              </button>
            </span>
          </p>
        </div>

        <hr />

        <div className="flex flex-col gap-2">
          <h2 className="text-(--text-light) font-bold text-sm">
            Spesifikasi Produk
          </h2>
          <table className="w-full border-separate border-spacing-y-2">
            <tbody>
              <tr>
                <td className="text-(--text-light)/80 text-sm">Panjang</td>
                <td className="text-(--text-light) text-sm text-end">2,5 m</td>
              </tr>
              <tr>
                <td className="text-(--text-light)/80 text-sm">Lebar</td>
                <td className="text-(--text-light) text-sm text-end">1,5 m</td>
              </tr>
              <tr>
                <td className="text-(--text-light)/80 text-sm">Material</td>
                <td className="text-(--text-light) text-sm text-end">
                  Plastik
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <section className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-(--text-light)">
              Ulasan Pelanggan
            </h1>
            <Link
              href="/products/sofa-modern/reviews"
              className="text-(--primary) text-sm"
            >
              Lihat Semua Ulasan
            </Link>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <div className="w-10 aspect-square rounded-full overflow-hidden">
                <img src="/assets/images/profile-1.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-(--text-light) font-bold text-sm">
                  Budi Santoso
                </h1>
                <Rating value={4.5} />
              </div>
            </div>

            <p className="text-sm text-(--text-light)/70">
              Sofa ini sangat nyaman dirawat. Tempat duduknya sangat nyaman
              dipakai. Saya sangat merekomendasikan ini.
            </p>
          </div>
        </section>

        <hr />

        <section className="flex flex-col gap-y-4">
          <h1 className="text-xl font-bold text-(--text-light)">
            Produk Serupa
          </h1>

          <ul className="flex gap-3 overflow-auto scrollbar-none">
            {products.map((product, index) => (
              <li key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-4 border-t border-(--border-light) py-2 flex justify-between items-center gap-x-4 bg-white">
        <button
          type="button"
          className="bg-slate-200 p-3 text-black flex items-center justify-center rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5"
          >
            <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
          </svg>
        </button>

        <button className="bg-(--primary) text-white px-4 py-3 rounded-xl w-full font-bold text-sm">
          Tambahkan ke Keranjang
        </button>
      </div>
    </div>
  );
}
