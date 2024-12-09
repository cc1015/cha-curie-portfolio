export default function base() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 sm:items-start">
        <h6 className="text-left">Curie Cha</h6>
        <ul className="flex space-x-4 text-sm">
          <a>Item 1</a>
          <a>Item 2</a>
          <a>Item 3</a>
        </ul>
      </main>
    </div>
  );
}
