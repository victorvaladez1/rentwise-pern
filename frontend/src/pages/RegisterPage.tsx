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
        <div>
            <form>
                <h2>Register</h2>

                <input 
                    type="email" 
                />
                <input 
                    type="password" 
                />
                <select
                >
                    <option value="manager">Manager</option>
                    <option value="viewer">Viewer</option>
                </select>

                <button
                >
                    Register
                </button>

                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;