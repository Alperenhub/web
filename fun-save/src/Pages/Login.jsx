import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [token1, setToken] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    async function authenticateUser(username, password) {
        const url = 'https://localhost:7181/api/Authentication';
        const requestBody = {
            username: username,
            password: password
        };

        try {
            const response = await axios.post(url, requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data; // Assuming the token is returned in the JSON response as { "token": "your_token_here" }
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
          <h1 className='mb-8 text-2xl font-bold'>Giriş Yap</h1>
            <input
                className="w-64 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                id="userName"
                type="text"
                placeholder="Kullanıcı Adı"
                value={user}
                onChange={handleChange}
            />
            <input
                className="w-64 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                id="password"
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={handlePassword}
            />
            <button
                className="w-64 p-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                onClick={() => authenticateUser(user, password)
                    .then(token => {
                        if (token) {
                            setToken(token)
                            localStorage.setItem('token', token);
                            navigate('/home');
                            console.log('Received token:', token);
                        } else {
                            console.log('Authentication failed');
                        }
                    })}
            >
                Giriş Yap
            </button>
        </div>
    );
}

export default Login;
