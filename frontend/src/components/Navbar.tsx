import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">🏠 RentWise</div>

      <div className="flex items-center space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/properties" className="hover:underline">Properties</Link>
        <Link to="/tenants" className="hover:underline">Tenants</Link>
        <Link to="/payments" className="hover:underline">Payments</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition border border-black"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
