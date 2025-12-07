import Button from "../Button";
import ProductCard, { Rating } from "../ProductCard";

const products = [
  {
    id: 1,
    name: "Meja Modern Minimalis",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-1.jpg",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
  },
];

const categories = [
  {
    name: "Semua",
  },
  {
    name: "Meja",
  },
  {
    name: "Kursi",
  },
  {
    name: "Lemari",
  },
  {
    name: "Rak",
  },
  {
    name: "Rak",
  },
  {
    name: "Rak",
  },
  {
    name: "Rak",
  },
];

const CategoryButton = ({ name, active = false }) => {
  return (
    <button
      type="button"
      className={`text-(--text-light px-3 py-1 rounded-4xl text-sm ${
        active
          ? "bg-(--primary)/20 text-(--primary)"
          : "bg-gray-200 text-(--text-light)"
      }`}
    >
      {name}
    </button>
  );
};

export default function FeaturedProduct() {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-xl font-bold text-(--text-light)">
          Produk Unggulan
        </h1>

        <div className="flex flex-col gap-y-3">
          <ul className="flex gap-3 overflow-auto scrollbar-none">
            {categories.map((category, index) => (
              <li key={index}>
                <CategoryButton name={category.name} active={index === 0} />
              </li>
            ))}
          </ul>

          <ul className="flex gap-4 flex-wrap">
            {products.map((product, index) => (
              <li key={index} className="flex-1">
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
        </div>
      </div>
      <Button className="flex gap-2 items-center justify-center">
        Lihat Semua Produk
        <div className="w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </div>
      </Button>
    </div>
  );
}
