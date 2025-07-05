import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-semibold">RentWise</div>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/properties" className="hover:underline">Properties</Link>
          <Link to="/tenants" className="hover:underline">Tenants</Link>
          <Link to="/payments" className="hover:underline">Payments</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </div>
      </nav>
      <main className="flex-grow p-6 bg-gray-50">{children}</main>
    </div>
  );
};

export default Layout;
