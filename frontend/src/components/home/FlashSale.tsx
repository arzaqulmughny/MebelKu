import Link from "next/link";
import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    name: "Meja Modern Minimalis",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-1.jpg",
    rating: 4.5,
    original_price: "Rp. 1.500.000",
    discount: 30,
    discount_expired: "2023-12-31",
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
    original_price: "Rp. 1.500.000",
    discount: 30,
    discount_expired: "2023-12-31",
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
    original_price: "Rp. 1.500.000",
    discount: 30,
    discount_expired: "2023-12-31",
  },
  {
    id: 1,
    name: "Meja",
    price: "Rp. 1.200.000",
    image: "/assets/images/product-2.jpg",
    rating: 3,
    original_price: "Rp. 1.500.000",
    discount: 30,
    discount_expired: "2023-12-31",
  },
];

export default function FlashSale() {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between items-end">
          <h1 className="text-xl font-bold text-(--text-light)">Flash Sale</h1>
          <Link
            className="text-sm font-bold text-(--primary)"
            href="/products?type=flash-sale"
          >
            Lihat Semua
          </Link>
        </div>

        <ul className="flex gap-4 flex-wrap">
          {products.map((product, index) => (
            <li key={index} className="flex-1">
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                rating={product.rating}
                originalPrice={product.original_price}
                discount={product.discount}
                discountExpired={product.discount_expired}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
