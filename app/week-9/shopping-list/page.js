"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { redirect } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user, loading } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // redirect user if not logged in
  if (loading) return <div className="text-white">Loading...</div>;
  if (!user) redirect("/week-9");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="flex flex-col lg:flex-row gap-10 bg-black min-h-screen text-white p-6 border border-white">
      <div className="flex-1 max-w-md">
        <h1 className="text-3xl font-bold mb-4">Shopping List + Meal Ideas</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
