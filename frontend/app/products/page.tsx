import Header, { ViewSelect } from "@/src/components/products/Header";
import { products } from "@/src/components/home/FeaturedProduct";
import ProductCard from "@/src/components/ProductCard";
import "react-range-slider-input/dist/style.css";
import PriceFilter from "@/src/components/products/PriceFilter";
import ExploreCategory from "@/src/components/home/ExploreCategory";
import ProductList from "@/src/components/products/ProductList";

const radioFilters = [
  {
    label: "On Sale",
    value: "on-sale",
    count: 1,
  },
  {
    label: "Fast Delivery",
    value: "fast-delivery",
    count: 21,
  },
  {
    label: "Flash Sale",
    value: "flash-sale",
    count: 1,
  },
];

const materials = [
  {
    label: "Kulit",
    value: "leather",
  },
  {
    label: "Logam",
    value: "metal",
  },
  {
    label: "Kayu",
    value: "wood",
  },
  {
    label: "Kain",
    value: "fabric",
  },
];

const colors = [
  { code: "#000000", label: "Hitam", value: "black" },
  { code: "#FFFFFF", label: "Putih", value: "white" },
  { code: "#FF0000", label: "Merah", value: "red" },
  { code: "#00FF00", label: "Hijau", value: "green" },
  { code: "#0000FF", label: "Biru", value: "blue" },
  { code: "#FFFF00", label: "Kuning", value: "yellow" },
  { code: "#FFA500", label: "Oranye", value: "orange" },
  { code: "#800080", label: "Ungu", value: "purple" },
  { code: "#FFC0CB", label: "Pink", value: "pink" },
  { code: "#A52A2A", label: "Cokelat", value: "brown" },
  { code: "#808080", label: "Abu-abu", value: "gray" },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-y-5 px-5 max-w-[1200px] mx-auto p-5">
      <div className="flex gap-x-5">
        <div className="w-[350px] max-w-[350px] h-fit sticky top-20 bg-white border border-(--border-light) rounded-xl p-5">
          <div className="flex flex-col gap-y-7">
            <div className="flex justify-between items-center">
              <h1 className="text-(--text-light) text-md font-bold tracking-wide">
                Filter
              </h1>

              <p className="text-slate-400 text-sm underline">Reset</p>
            </div>

            <div className="flex flex-col gap-y-4">
              {radioFilters.map((filterItem, index) => (
                <label className="flex items-center gap-x-5" key={index}>
                  <input type="radio" value={filterItem.value} />
                  <p className="text-gray-600 text-sm flex justify-between w-full">
                    {filterItem.label}{" "}
                    <span className="text-gray-400">{filterItem.count}</span>
                  </p>
                </label>
              ))}
            </div>

            <hr />

            <PriceFilter />

            <div className="flex flex-col gap-y-2">
              <h2 className="text-gray-600 spac tracking-widest text-sm">
                BAHAN
              </h2>

              <ul className="flex flex-col gap-y-2">
                {materials.map((material, index) => (
                  <li
                    key={index}
                    className={`p-1 px-2 rounded-md text-sm flex items-center justify-between ${
                      [1, 2].includes(index)
                        ? "bg-(--primary)/10 text-(--primary)"
                        : "text-(--text-light)"
                    }`}
                  >
                    {material.label}{" "}
                    {[1, 2].includes(index) ? (
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
                          d="M5 11.917 9.724 16.5 19 7.5"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <hr />

            <div className="flex flex-col gap-y-2">
              <h2 className="text-gray-600 spac tracking-widest text-sm">
                WARNA
              </h2>

              <ul className="flex gap-2 flex-wrap">
                {colors.map((color, index) => (
                  <li
                    className="w-7 min-w-7 border border-(--border-light) aspect-square rounded-full"
                    style={{ backgroundColor: color.code }}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <span className="text-(--text-light)">
                Ditemukan 9 produk untuk kata kunci:
              </span>{" "}
              <span className="text-(--text-light) font-bold">
                "Sofa Modern"
              </span>
            </p>
            <div className="flex gap-x-5">
              <select className="text-(--text-light) text-sm bg-white px-4 py-2 border border-(--border-light) rounded-2xl">
                <option>Paling Relevan</option>
                <option>Paling Relevan</option>
              </select>
              <ViewSelect />
            </div>
          </div>

          <div className="flex flex-col gap-y-10">
            <ProductList products={products} />
            <ExploreCategory />
          </div>
        </div>
      </div>
    </div>
  );
}
