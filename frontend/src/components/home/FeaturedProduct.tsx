import Button from "../Button";
import ProductCard, { Rating } from "../ProductCard";

export const products = [
  {
    id: 1,
    name: "Meja Modern Minimalis",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-1.jpg",
    rating: 4.5,
    category: "Living Room",
    sub_category: "Chair",
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
    category: "Living Room",
    sub_category: "Chair",
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
    category: "Living Room",
    sub_category: "Chair",
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
    category: "Living Room",
    sub_category: "Chair",
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
    category: "Living Room",
    sub_category: "Chair",
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
    category: "Living Room",
    sub_category: "Chair",
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

interface CategoryButtonProps {
  name: string;
  active?: boolean;
}

const CategoryButton = ({ name, active = false }: CategoryButtonProps) => {
  return (
    <button
      type="button"
      className={`text-(--text-light px-3 py-1 rounded-4xl text-xs transition-all duration-300 cursor-pointer ${
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
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex flex-col gap-y-4">
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

          <ul className="flex gap-4 scrollbar-none overflow-auto">
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
        </div>
      </div>
    </div>
  );
}
