"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // copy the array so we don’t mutate props
  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  // group by category
  const groupedItems = sortedItems.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <section className="text-white">
      {/* Sorting Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-yellow-500" : "bg-violet-600"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-yellow-500" : "bg-green-600"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("group")}
          className={`px-3 py-1 rounded ${
            sortBy === "group" ? "bg-yellow-500" : "bg-orange-600"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Item Display */}
      <ul className="space-y-3">
        {sortBy === "group"
          ? Object.keys(groupedItems)
              .sort()
              .map((category) => (
                <div key={category}>
                  <h3 className="text-xl font-bold capitalize mt-3 mb-1 text-yellow-400">
                    {category}
                  </h3>
                  {groupedItems[category].map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </div>
              ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
    </section>
  );
}
