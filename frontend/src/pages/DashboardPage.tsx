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
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome to RentWise</h1>
          <p className="text-lg">You're successfully authenticated.</p>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
