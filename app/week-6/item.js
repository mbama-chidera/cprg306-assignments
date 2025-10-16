export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 my-4 p-2 w-96">
      <div className="text-2xl font-bold capitalize">
        {name}
      </div>
      <div className="text-lg mt-1 text-gray-200">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
