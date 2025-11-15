"use client";

export default function Item({ item, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="bg-black border border-white rounded-md p-3 cursor-pointer hover:bg-gray-800 transition"
    >
      <p className="font-medium">{item.name}</p>
      <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
      <p className="text-sm text-gray-400">Category: {item.category}</p>
    </li>
  );
}
