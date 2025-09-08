import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const link = ({ isActive }) =>
    "px-3 py-2 rounded-lg text-sm " +
    (isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100");

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center gap-6">
        <Link to="/" className="text-xl font-semibold">
          RentWise
        </Link>
        <nav className="flex gap-2">
          <NavLink to="/" className={link}>
            Home
          </NavLink>
          <NavLink to="/about" className={link}>
            About
          </NavLink>
          <NavLink to="/contact" className={link}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
