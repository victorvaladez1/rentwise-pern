import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Layout from '../components/Layout';

  interface Property {
    id: number,
    address: string,
    city: string,
    state: string,
    zip: string,
    rent: number
  }

const DashboardPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const  [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/properties', {withCredentials: true})
        setProperties(res.data)
      } catch (err) {
        console.error('Error fetching properties', err)
      }
    }

    fetchProperties()
  }, [])

  return (
    <Layout>
      {/* <div className="min-h-[80vh] flex items-center justify-center bg-gray-100"> */}
        {/* <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome to RentWise</h1>
          <p className="text-lg">You're successfully authenticated.</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div> */}



        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">City</th>
                <th className="px-4 py-2 text-left">State</th>
                <th className="px-4 py-2 text-left">Zip</th>
                <th className="px-4 py-2 text-left">Rent</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.id}>
                  <td className="px-4 py-2">{property.address}</td>
                  <td className="px-4 py-2">{property.city}</td>
                  <td className="px-4 py-2">{property.state}</td>
                  <td className="px-4 py-2">{property.zip}</td>
                  <td className="px-4 py-2">{property.rent}</td>
                  <td>
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-blue-500 hover:underline mr-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



      {/* </div> */}
    </Layout>
  );
};

export default DashboardPage;
