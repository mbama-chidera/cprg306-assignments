"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <form className="mx-auto my-4 flex justify-center space-x-4 bg-white w-fit p-4 rounded shadow">
      
      
      {/* Decrement button */}
      <button
        type="button"
        onClick={decrement}
        disabled={quantity === 1}
        className="px-3 py-1 rounded font-extrabold text-lg text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        –
      </button>

      {/* Quantity input (read-only) */}
      <input
        type="text"
        readOnly
        value={quantity}
        className="text-black w-12 text-lg font-extrabold text-center border border-black rounded"
      />
      

      {/* Increment button */}
      <button
        type="button"
        onClick={increment}
        disabled={quantity === 20}
        className="px-3 py-1 rounded font-extrabold text-lg text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        +
      </button>
    </form>
  );
}
