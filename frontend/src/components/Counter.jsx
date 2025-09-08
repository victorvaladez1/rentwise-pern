import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const btnBase =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition" +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  const btnPrimary = `${btnBase} bg-indigo-600 text-white hover:bg-indigo-700`;
  const btnGhost = `${btnBase} border border-gray-300 bg-white hover:bg-gray-50`;
  const btnDanger = `${btnBase} bg-rose-600 text-white hover:bg-rose-700`;

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Counter</h1>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            Demo
          </span>
        </header>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-sm text-gray-600">Current Count</p>
            <p className="mt-1 font-mono text-5xl tabular-nums">{count}</p>
          </div>
          <button className={btnGhost} onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className={btnPrimary} onClick={() => setCount(count - 1)}>
            Decrease
          </button>
          <button className={btnDanger} onClick={() => setCount(count + 1)}>
            Increase
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Tip: try <kbd className="rounded border bg-gray-50 px-1">Shift</kbd> +
          click to jump faster.
        </p>
      </div>
    </div>
  );
}
