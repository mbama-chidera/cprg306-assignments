
export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 my-4 p-2 w-96">
      <p className="text-2xl font-bold text-white">{name}</p>
      <p className="text-lg font-bold">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
