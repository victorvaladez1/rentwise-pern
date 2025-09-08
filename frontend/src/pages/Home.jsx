import Counter from "../components/Counter";
export default function Home() {
  return (
    <div>
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-medium">Welcome</h2>
        <p className="mt-1 text-gray-600">Use the nav to manage properties.</p>
      </section>
      <Counter />
    </div>
  );
}
