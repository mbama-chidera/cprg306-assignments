// Week Assignment 5
"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // safe increase and  decrease
  const inc = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name: name.trim(), quantity, category };
    console.log("New item:", item);
    alert(`Item Added: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`);

    // reset
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-white border border-gray-600 p-4 rounded-sm shadow-sm justify-content h-50 w-100 max-w-md"
    >
      {/* Item Name */}
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 rounded-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 text-black"
        />
      </div>

      {/* Quantity + Category Row */}
      <div className="flex items-center justify-between mt-4 gap-4">
        {/* quantity controls (left) */}
        <div className="flex items-center gap-3">
          {/* number display box */}
          <div className="w-12 h-8 flex items-center justify-center font-bold text-lg border border-black rounded-md text-black">
            {quantity}
          </div>

          {/* decrease button */}
          <button
            type="button"
            onClick={dec}
            disabled={quantity === 1}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-500  hover:bg-blue-600 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            −
          </button>

          {/* increase button */}
          <button
            type="button"
            onClick={inc}
            disabled={quantity === 20}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-500  hover:bg-blue-600 text-white text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>

        {/* category select */}
        <div className="w-48">
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
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-5">
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
