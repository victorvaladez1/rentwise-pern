import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('manager');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                email,
                password,
                role,
            }, {
                withCredentials: true
            });

            navigate('/login');
        } catch (err: any) {
            console.error('Registration failed:', err);
            alert(err.response?.data?.error || 'Registration failed. Try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600">
            <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-md w-80 space-y-4">
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="manager">Manager</option>
                    <option value="landlord">Landlord</option>
                    <option value="tenant">Tenant</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    Register
                </button>

                <p className="text-sm text-center text-gray-600">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
