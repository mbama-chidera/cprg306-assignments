"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sorting logic
  let sortedItems = [...itemsData];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  // Group by category
  const groupedItems = sortedItems.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <main className="flex flex-col items-center text-white p-6">
      {/* Sorting Buttons */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-bold ${
            sortBy === "name" ? "bg-yellow-500" : "bg-gray-600"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-bold ${
            sortBy === "category" ? "bg-yellow-500" : "bg-gray-600"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded-md font-bold ${
            sortBy === "group" ? "bg-yellow-500" : "bg-gray-600"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Items Display */}
      <ul className="space-y-4">
        {sortBy === "group"
          ? Object.keys(groupedItems)
              .sort()
              .map((category) => (
                <div
                  key={category}
                  className="bg-white text-white rounded-xl shadow-lg p-2 w-400px"
                >
                  <h2 className="text-blue-600 text-lg font-bold mb-2 capitalize">
                    {category}
                  </h2>
                  <div className="space-y-3">
                    {groupedItems[category]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item) => (
                        <Item
                          key={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          category={item.category}
                        />
                      ))}
                  </div>
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
    </main>
  );
}
