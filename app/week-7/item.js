export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 my-2 p-3 w-100">
      <div className="text-xl font-bold capitalize">{name}</div>
      <div className="text-gray-300">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
