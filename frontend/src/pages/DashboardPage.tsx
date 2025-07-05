import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const DashboardPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome to RentWise</h1>
          <p className="text-lg">You're successfully authenticated.</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
