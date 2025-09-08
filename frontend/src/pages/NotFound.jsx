import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-medium">404</h2>
      <p className="mt-1 text-gray-600">Page not found.</p>
      <Link
        to="/"
        className="mt-4 inline-block rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
