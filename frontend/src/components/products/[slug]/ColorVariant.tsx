'use client';
import { useState } from "react";

const colorVariants = [
  {
    name: "Green",
    code: "bg-green-900",
  },
  {
    name: "Black",
    code: "bg-black",
  },
  {
    name: "Blue",
    code: "bg-blue-950",
  },
];

export default function ColorVariant() {
  const [colorVariant, setColorVariant] = useState(colorVariants[0]);

  return (
    <ul className="flex gap-x-2">
      {colorVariants.map((variant) => (
        <li key={variant.name}>
          <button
            type="button"
            onClick={() => setColorVariant(variant)}
            className={`w-6 aspect-square cursor-pointer ${
              variant.code
            } rounded-full ${
              colorVariant.name === variant.name
                ? "ring-2 ring-(--primary) border border-white"
                : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
