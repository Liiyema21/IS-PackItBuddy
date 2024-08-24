import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { isAuthenticated } from './ForwarderComp/authUtils';
import './ForForm.css';
import Truck4 from '../assets/Truck4.jpg';

const ForForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/ForForm'); // Redirect to sign-in page if not authenticated
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid.';
    }

    if (!formData.address.trim()) {
      errors.address = 'Address is required.';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If no errors, proceed with form submission
      console.log('Form data:', formData);

      // Navigate to the LandingPage component after successful submission
      navigate('/ForHomePage');
    }
  };

  return (
    <div className="container">
      <div className="form-section">
        <h2>Create Account</h2>
        <button>Sign up with Google</button>
        <p style={{ textAlign: 'center', margin: '15px 0' }}>OR</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">First name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your first name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone*</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Physical Address*</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your physical address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Create account</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
      <div className="image-section">
        <div className="overlay-content">
          <h1>PackItBuddy</h1>
        </div>
      </div>
    </div>
  );
};

export default ForForm;
