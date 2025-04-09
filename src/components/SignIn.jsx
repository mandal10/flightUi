import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend for authentication
        console.log(formData);

        // Simulate successful login
        // Save authentication token (e.g., to localStorage) or session
        localStorage.setItem('authToken', 'your-token-here');

        // Redirect to homepage or dashboard
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-bold mb-4">Sign In</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Sign In</button>
                </form>

                <p className="mt-4 text-sm text-center">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-blue-500">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
