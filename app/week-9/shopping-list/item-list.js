"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="mt-4">
      <div className="flex gap-3 mb-3">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-neutral-800 text-gray-300"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-neutral-800 text-gray-300"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </div>
  );
}
