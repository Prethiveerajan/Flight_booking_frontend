

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (login(email, password)) {
      navigate('/flight-search');
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={formSubmitHandler}>
          <h3>Login</h3>
          <div className='mb-3'>
            <label>Email:</label>
            <input
              type='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-3'>
            <label>Password:</label>
            <input
              type='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Login</button>
          </div>
          <p className='forget-password text-right'>
            Don't have an account? <a href='/signup'>Register here?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;

