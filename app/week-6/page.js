import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="mx-auto max-w-md p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-500">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
