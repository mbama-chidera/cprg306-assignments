export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded-md shadow-sm">
      <div className="font-semibold capitalize">{name}</div>
      <div>Quantity: {quantity}</div>
      <div className="text-sm text-gray-600 capitalize">Category: {category}</div>
    </li>
  );
}
