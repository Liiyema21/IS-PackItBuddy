import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { isAuthenticated } from './ForwarderComp/authUtils';

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
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid.";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required.";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
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

      // Navigate to the ForHomePage component after successful submission
      navigate('/ForHomePage');
    }
  };

  return (
    <div>
      <main className="flex flex-col items-center min-h-screen py-20 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <div>
            <button>
              <Link to="/" className="">
                <IoArrowBack />
              </Link>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <h1 className="uppercase py-4 px-4 text-2xl text-center font-bold text-[#131a4b]">Create an account</h1>

            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Your Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-white rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                required
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="relative mt-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="relative mt-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-white rounded border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                required
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="relative mt-4">
              <label htmlFor="address" className="leading-7 text-sm text-gray-600">Physical Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full bg-white rounded border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                required
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            <div className="relative mt-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-white rounded border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                required
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="text-center mt-6 border border-gray-200 text-2xl rounded-lg px-4 bg-[#131a4b] text-gray-200">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForForm;
