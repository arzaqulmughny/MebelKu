"use client";

import { useRef, useState } from "react";
import PriceInput from "@/src/components/products/PriceInput";
import RangeSlider from "react-range-slider-input";

export default function PriceFilter() {
  const [value, setValue] = useState([30, 60]);
  const ref = useRef(null);
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-gray-600 spac tracking-widest text-sm">Harga</h2>

      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <PriceInput />
          <span>-</span>
          <PriceInput />
        </div>

        <RangeSlider ref={ref} value={value} onInput={setValue} />
      </div>
    </div>
  );
}
