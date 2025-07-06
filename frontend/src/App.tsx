import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PropertiesPage from './pages/Properties';
import TenantsPage from './pages/Tenants';
import PaymentsPage from './pages/Payments';
import SettingsPage from './pages/Settings';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />

          <Route path="/properties" element={
            <ProtectedRoute>
              <PropertiesPage />
            </ProtectedRoute>
          } />

          <Route path="/tenants" element={
            <ProtectedRoute>
              <TenantsPage />
            </ProtectedRoute>
          } />

          <Route path="/payments" element={
            <ProtectedRoute>
              <PaymentsPage />
            </ProtectedRoute>
          } />

          <Route path="/settings" element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
