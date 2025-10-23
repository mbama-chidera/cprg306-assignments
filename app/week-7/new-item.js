"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // increment/decrement logic
  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    // reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black p-4 rounded-lg mb-6 border border-gray-600 justify-content"
    >
      <div className="flex flex-col gap-3">
        {/* Item Name */}
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 rounded-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 text-black"
        />

        {/* Quantity + Category on the same row */}
        <div className="flex items-center justify-between mt-4 gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold py-1 px-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              −
            </button>

            <span className="px-3 py-1 border border-gray-400 rounded text-lg bg-white text-black font-semibold">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className=" bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-1 px-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>

          {/* Category Dropdown beside quantity */}
          <div className="w-40">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border text-black border-gray-600 rounded-md focus:outline-none"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="dry goods">Dry Goods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="household">Household</option>
              <option value="other">Other</option>

            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-500 text-white text-lg font-medium hover:bg-blue-600 transition"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}
