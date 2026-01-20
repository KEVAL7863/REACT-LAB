//create a class based component
//that will allow user to regester
//1.name (text)
//2.email
//3.password
//4.confirm password
//5.gender
//6.country (dropdown with at least 5 countries)
//7.terms and conditions(checkbox)
// 8. color picker
//9. Date time
//on form submission,validate the inputs and displY
//AN ALERT with enter information (except password fields)

import React, { Component } from 'react';

class StateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      country: '',
      terms: false,
      color: '#000000',
      datetime: '',
      errors: {}
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  validateForm = () => {
    const errors = {};
    const { name, email, password, confirmPassword, gender, country, terms, datetime } = this.state;

    // Name validation
    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters only';
    }

    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Gender validation
    if (!gender) {
      errors.gender = 'Please select a gender';
    }

    // Country validation
    if (!country) {
      errors.country = 'Please select a country';
    }

    // Terms validation
    if (!terms) {
      errors.terms = 'You must accept the terms and conditions';
    }

    // Datetime validation
    if (!datetime) {
      errors.datetime = 'Please select date and time';
    }

    return errors;
  };

  handleSubmit = () => {
    const errors = this.validateForm();

    if (Object.keys(errors).length === 0) {
      const { name, email, gender, country, color, datetime, terms } = this.state;
      
      const message = `
Registration Successful!

Name: ${name}
Email: ${email}
Gender: ${gender}
Country: ${country}
Favorite Color: ${color}
Date & Time: ${new Date(datetime).toLocaleString()}
Terms Accepted: ${terms ? 'Yes' : 'No'}
      `;
      
      alert(message);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { name, email, password, confirmPassword, gender, country, terms, color, datetime, errors } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
            User Registration
          </h1>

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter password (min 6 characters)"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Gender Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={this.handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={this.handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={gender === 'Other'}
                    onChange={this.handleChange}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>

            {/* Country Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <select
                name="country"
                value={country}
                onChange={this.handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select a country</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Favorite Color
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  name="color"
                  value={color}
                  onChange={this.handleChange}
                  className="h-12 w-24 border border-gray-300 rounded cursor-pointer"
                />
                <span className="text-sm text-gray-600">{color}</span>
              </div>
            </div>

            {/* DateTime Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date & Time *
              </label>
              <input
                type="datetime-local"
                name="datetime"
                value={datetime}
                onChange={this.handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {errors.datetime && <p className="text-red-500 text-sm mt-1">{errors.datetime}</p>}
            </div>

            {/* Terms and Conditions */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="terms"
                  checked={terms}
                  onChange={this.handleChange}
                  className="mt-1 mr-3"
                />
                <span className="text-sm text-gray-700">
                  I agree to the terms and conditions *
                </span>
              </label>
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
            </div>

            {/* Submit Button */}
            <button
              onClick={this.handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-lg"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StateExercise;