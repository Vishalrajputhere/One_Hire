import React, { useState } from 'react';
import './Login.css'; // Import custom CSS file for the login page

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement authentication logic here (e.g., check user credentials, API calls, etc.)

    // For now, let's just log the user data
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to One_Hire</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
        </form>
      </div>
    </div>
  );
}
