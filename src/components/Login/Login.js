import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate role-based login
    if (username === 'admin' && password === 'admin123') {
      setUserRole('admin');
      setErrorMessage('');
      navigate('/admin'); // Redirect to the admin page
    } else if (username === 'user' && password === 'user123') {
      setUserRole('user');
      setErrorMessage('');
      navigate('/products'); // Redirect to the products page
    } else {
      // Show error message if credentials are incorrect
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>

        {/* Error message */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
