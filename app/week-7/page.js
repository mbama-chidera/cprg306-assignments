"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // initialize list from JSON
  const [items, setItems] = useState(itemsData);

  // event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="mx-auto max-w-md p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-500">Shopping List</h1>

      {/* Add Item Form */}
      <NewItem onAddItem={handleAddItem} />

      {/* Item List */}
      <ItemList items={items} />
    </main>
  );
}
