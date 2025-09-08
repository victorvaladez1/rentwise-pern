import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  const link = ({ isActive }) =>
    "px-3 py-2 rounded-lg text-sm " +
    (isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center gap-6">
          <NavLink to="/" className="text-xl font-semibold">
            RentWise
          </NavLink>
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

      <main className="mx-auto max-w-5xl px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
