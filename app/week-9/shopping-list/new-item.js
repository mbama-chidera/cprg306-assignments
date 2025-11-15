"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = {
      id: uuidv4(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-900 border border-white rounded-lg p-4 mb-4"
    >
        <div className="flex flex-col gap-3">
        {/* Item Name */}
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 rounded-sm border border-white focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-white text-white"
        />

        {/* Quantity + Category on the same row */}
        <div className="flex items-center justify-between mt-4 gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-1 px-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
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
              className="w-full px-3 py-2 border text-white border-white rounded-md focus:outline-none bg-black"
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
