"use client";

import { useState } from "react";
import ProductCard from "../ProductCard";

export default function ProductList({ products }) {
  const [viewMode, setViewMode] = useState("grid");

  if (viewMode == "grid") {
    return (
      <ul className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    );
  }

  return (
    <ul className="flex flex-col gap-y-5">
      {products.map((product, index) => (
        <li key={index}>
          <div className="bg-white rounded-xl border border-(--border-light) overflow-hidden flex">
            <div className="w-50 aspect-square">
              <img src={product.image} alt="" className="w-full h-full object-cover border"/>
            </div>

            <div>
              <p className="text-(--text-light)">{product.category}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
