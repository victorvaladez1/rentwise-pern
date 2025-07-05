import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-indigo-600">RentWise</h1>
            <div className="space-x-4">
                <Link to="/" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
                <Link to="/expenses" className="text-gray-700 hover:text-indigo-600">Expenses</Link>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
            </div>
        </nav>
    );
}