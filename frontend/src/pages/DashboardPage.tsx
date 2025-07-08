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

const DashboardPage: React.FC = () => {


  return (
    <Layout>
      <div className="min-h-[80vh] px-6 py-10 bg-gray-100">
        <h1 className="text-2xl font-semibold">Welcome to RentWise!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-sm text-gray-500">Total Properties</h3>
            <p className="text-2xl font-bold">6</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-sm text-gray-500">Total Tenants</h3>
            <p className="text-2xl font-bold">14</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-sm text-gray-500">Payments This Month</h3>
            <p className="text-2xl font-bold">$8,950</p>
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
