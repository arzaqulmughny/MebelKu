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

const Specifications = () => {
  return (
    <div className="flex flex-col md:gap-y-4 gap-y-0.5 w-full">
      <div className="flex items-center justify-between md:border-b md:pb-4">
        <h1 className="md:text-xl text-sm font-bold text-(--text-light)">
          Spesifikasi Produk
        </h1>
      </div>

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
            <td className="text-(--text-light) text-sm text-end">Plastik</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const RelatedProdcts = () => {
  return (
    <section className="flex flex-col gap-y-4">
      <h1 className="text-xl font-bold text-(--text-light)">Produk Serupa</h1>

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
  );
};

const Review = () => {
  return (
    <section className="flex flex-col gap-y-4 w-full">
      <div className="flex items-center justify-between md:border-b md:pb-4">
        <h1 className="text-xl font-bold text-(--text-light)">
          Ulasan Pelanggan
        </h1>
        <Link
          href="/products/sofa-modern/reviews"
          className="text-(--primary) text-sm md:hidden"
        >
          Lihat Semua Ulasan
        </Link>

        <div className="hidden md:flex gap-x-5">
          {Array.from({ length: 2 }).map((_, index) => (
            <button
              className={`text-(--text-light) w-6 flex items-center justify-center cursor-pointer ${
                index == 1 ? "rotate-180" : ""
              }`}
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
          ))}
        </div>
      </div>

      <ul className="flex gap-x-4 w-full overflow-hidden">
        {Array.from({ length: 2 }).map((item, index) => (
          <li key={index}>
            <ReviewCard />
          </li>
        ))}
      </ul>

      <a
        href="#more-reviews"
        className="text-(--primary) text-sm flex items-center justify-end gap-x-2"
      >
        <p>Lihat Semua Ulasan (25)</p>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </a>
    </section>
  );
};

const MoreReview = () => {
  return (
    <section id="more-reviews" className="flex flex-col gap-y-12 w-full">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between md:border-t md:pt-4">
          <h1 className="text-xl font-bold text-(--text-light)">
            Ulasan Lengkap
          </h1>

          <div className="flex items-center gap-x-2">
            <p className="text-(--text-light)">Urutkan: </p>

            <select className="border border-(--text-light)/20 text-(--text-light) px-3 py-2 rounded-md">
              <option value="latest">Terbaru</option>
              <option value="latest">Terlama</option>
              <option value="latest">Tertinggi</option>
              <option value="latest">Terendah</option>
            </select>
          </div>
        </div>

        <ul className="flex flex-col gap-y-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <li key={index}>
              <div className="flex gap-x-5 w-full">
                <div className="min-w-12 w-12 h-12 overflow-hidden rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://placehold.co/100x100?text=AM"
                    alt=""
                  />
                </div>

                <div className="w-full flex flex-col gap-y-5">
                  <div className="w-full flex flex-col gap-y-2">
                    <div className="flex items-start justify-between">
                      <h1 className="text-(--text-light) text-sm font-bold">
                        Arzaqul Mughny
                      </h1>

                      <p className="text-(--text-light)/60 text-xs">
                        1 hari yang lalu
                      </p>
                    </div>

                    <Rating value={4.5} />

                    <h2 className="text-(--text-light) text-sm">
                      Kualitas Oke, Pengiriman Cepat
                    </h2>
                    <p className="text-(--text-light)/70 text-sm">
                      Sofa ini sangat nyaman dirawat. Tempat duduknya sangat
                      nyaman dipakai. Saya sangat merekomendasikan ini untuk
                      ruang keluarga kecil. Cuma ada sedikit goresan di kaki
                      sofa pas dateng, tapi ga terlalu kelihatan sih. Overall
                      oke banget dengan harga segini.
                    </p>

                    <ul className="flex gap-x-2">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <li key={index}>
                          <div className="w-15 aspect-square rounded-xl overflow-hidden">
                            <img
                              src="https://placehold.co/100x100?text=AM"
                              alt=""
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-3 flex items-center gap-6">
                    <button className="flex items-center gap-x-2 text-gray-500">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-gray-500 text-sm">Membantu (5)</p>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button className="text-(--text-light)/80 border border-(--border-light) py-2.5 flex items-center justify-center gap-x-2 rounded-lg">
        <p className="text-sm">Muat Ulasan Lainnya</p>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
};
const ReviewCard = () => {
  return (
    <div className="bg-slate-50 p-4 rounded-xl flex flex-col gap-y-4 min-w-[280px]">
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
        Sofa ini sangat nyaman dirawat. Tempat duduknya sangat nyaman dipakai.
        Saya sangat merekomendasikan ini.
      </p>
    </div>
  );
};

const AddToWishlistButton = () => {
  return (
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
  );
};

const AddToCartButton = () => {
  return (
    <button className="bg-(--primary) text-white px-4 py-3 rounded-xl w-full font-bold text-sm">
      Tambahkan ke Keranjang
    </button>
  );
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:p-8 gap-y-15">
        <div className="flex flex-col md:flex-row gap-x-8">
          <div className="w-full md:max-w-[600px]">
            <Slider images={images} />
          </div>

          <div className="md:w-1/2 md:min-w-[300px]">
            <div className="p-3 md:p-0 flex flex-col h-full gap-y-5">
              <div className="flex flex-col gap-y-3">
                <h1 className="text-xl font-bold text-(--text-light) md:text-2xl leading-5">
                  Sofa Modern
                </h1>

                <div className="flex justify-between items-start md:flex-col md:gap-y-7">
                  <div className="flex gap-x-2 md:order-2 md:items-end">
                    <div className="flex flex-col gap-y-2.5">
                      <del className="text-xs text-(--text-light)/40 line-through">
                        Rp. 1.500.000
                      </del>
                      <p className="text-green-500 text-lg font-bold md:text-2xl md:leading-5">
                        Rp. 1.200.000
                      </p>
                    </div>

                    <div className="bg-red-100 text-red-500 w-fit h-fit px-1.5 py-0.5 rounded text-xs">
                      -30%
                    </div>
                  </div>

                  <div className="flex items-center gap-x-1 md:order-1">
                    <Star fillPercent={100} />
                    <p className="font-bold text-sm text-(--text-light)">4.5</p>
                    <p className="text-sm text-slate-400">(128 reviews)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-(--text-light) font-bold text-sm">
                  Pilih Warna
                </h2>
                <ColorVariant />
              </div>

              <section className="flex flex-col gap-2">
                <h2 className="text-(--text-light) font-bold text-sm">
                  Deskripsi
                </h2>
                <p className="text-sm text-(--text-light)/80 md:leading-7">
                  Sofa modern ini memiliki desain yang modern dan minimalis.
                  Sofa ini memiliki 2 tempat duduk dan 1 tempat tidur. Sofa ini
                  memiliki panjang 2,5 m dan lebar 1,5 m. Kelebihan dari sofa
                  ini adalah memiliki desain yang modern dan minimalis.
                  <span>
                    <button className="text-sm text-(--primary) font-bold">
                      Baca Selengkapnya
                    </button>
                  </span>
                </p>
              </section>

              <div className="hidden md:flex justify-between mt-auto items-center gap-x-4 bg-white">
                <AddToWishlistButton />
                <AddToCartButton />
              </div>

              <hr className="md:hidden" />

              <div className="flex flex-col gap-2 md:hidden">
                <Specifications />
              </div>

              <hr className="md:hidden" />

              <div className="md:hidden">
                <Review />
              </div>

              <hr className="md:hidden" />
            </div>

            <div className="fixed z-5 md:hidden bottom-0 left-0 right-0 px-4 border-t border-(--border-light) py-2 flex justify-between items-center gap-x-4 bg-white">
              <AddToWishlistButton />
              <AddToCartButton />
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-x-10 w-full">
          <div className="flex-1">
            <Specifications />
          </div>

          <div className="w-2/3">
            <Review />
          </div>
        </div>

        <div className="md:p-0 p-3 flex flex-col gap-y-10">
          <RelatedProdcts />
          <MoreReview />
        </div>
      </div>
    </div>
  );
}
