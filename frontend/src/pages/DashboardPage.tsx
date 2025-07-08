import React, { useEffect, useState } from 'react';
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

  interface Tenant {
    id: number,
    user_id: number,
    property_id: number,
    tenant_name: string,
    rent_amount: string,
    start_date: string,
    end_date: string,
    is_active: boolean
  }

  interface Payment {
    id: number,
    user_id: number,
    lease_id: number,
    amount: number,
    date_paid: string,
    is_late: boolean,
    note: string | null;
  }

const DashboardPage: React.FC = () => {

  const [properties, setProperties] = useState<Property[]>([]);
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [monthlyPayments, setMonthlyPayments] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [propRes, tenantRes, monthlyRes] = await Promise.all([
          axios.get('http://localhost:5000/api/properties', {withCredentials: true}),
          axios.get('http://localhost:5000/api/leases', {withCredentials: true}),
          axios.get('http://localhost:5000/api/payments/this-month', { withCredentials: true})
        ]);

        setProperties(propRes.data);
        setTenants(tenantRes.data);
        setMonthlyPayments(monthlyRes.data);

      } catch (err) {
        console.error('Dashboard data fetch failed', err);
      };
    };

    fetchAllData();
  }, []);

  const totalThisMonth = monthlyPayments.reduce(
    (sum, p) => sum + Number(p.amount),
    0
  );

  return (
    <Layout>
      <div className="min-h-[80vh] px-6 py-10 bg-gray-100">
        <h1 className="text-2xl font-semibold">Welcome to RentWise!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-sm text-gray-500">Total Properties</h3>
            <p className="text-2xl font-bold">{properties.length}</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-sm text-gray-500">Total Tenants</h3>
            <p className="text-2xl font-bold">{tenants.length}</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-sm text-gray-500">Payments This Month</h3>
            <p className="text-2xl font-bold">${totalThisMonth.toLocaleString()}</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-sm text-gray-500">Leases Expiring Soon</h3>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
