import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form data to the backnd
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-mainColor"
          required
        />
      </div>


      <div className="mb-4">
        <button
          type="submit"
          className="bg-mainColor text-white py-2 px-4 rounded hover:bg-opacity-80 focus:outline-none"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;