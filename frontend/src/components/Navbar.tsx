import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">🏠 RentWise</div>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/properties" className="hover:underline">Properties</Link>
        <Link to="/tenants" className="hover:underline">Tenants</Link>
        <Link to="/payments" className="hover:underline">Payments</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
