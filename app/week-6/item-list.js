"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort logic
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
    <main className="p-4">
      {/* Sorting buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-bold ${
            sortBy === "name" ? "bg-yellow-500" : "bg-gray-500"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-bold ${
            sortBy === "category" ? "bg-yellow-500" : "bg-gray-500"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded-md font-bold ${
            sortBy === "group" ? "bg-yellow-500" : "bg-gray-500"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Display items */}
      {sortBy === "group" ? (
        Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <div key={category} className="mb-6">
              <h2 className="font-bold text-lg text-blue-600 capitalize mb-2">
                {category}
              </h2>
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
          ))
      ) : (
        sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))
      )}
    </main>
  );
}
