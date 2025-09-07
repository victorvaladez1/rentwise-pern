import { useEffect, useState } from "react";
import { http } from "./lib/http";

export default function App() {
  const [health, setHealth] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    http
      .get("/health")
      .then((r) => setHealth(r.data))
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <h1 className="text-2xl font-semibold">RentWise Frontend</h1>
          <p className="text-sm text-gray-600">
            Vite + React + same-origin API
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-medium">API health</h2>
          {err ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-red-700">
              {err}
            </div>
          ) : health ? (
            <pre className="overflow-x-auto rounded-lg border bg-gray-50 p-3 text-sm">
              {JSON.stringify(health, null, 2)}
            </pre>
          ) : (
            <span className="text-gray-500">checking...</span>
          )}
        </section>
      </main>
    </div>
  );
}
