

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


function SignupComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    const isAdmin = event.target.elements.isAdmin.checked;
    
    const newUser = { firstName, lastName, email, password, isAdmin };
    signup(newUser);
    navigate('/login');
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={formSubmitHandler}>
          <h3>Sign up</h3>
          <div className='mb-3'>
            <label>First Name:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className='mb-3'>
            <label>Last Name:</label>
            <input
              type='text'
              className='form-control'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Enter your last name'
              required
            />
          </div>
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
          <div className='mb-3'>
            <label>
              Admin:
              <input type="checkbox" name="isAdmin" />
            </label>
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
          </div>
          <p className='forget-password text-right'>
            Already registered, <a href='/login'>Sign-in here?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupComponent;

