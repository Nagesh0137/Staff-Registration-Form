import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css';

const StaffRegistrationForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits')
      .required('Phone Number is required'),
    joiningDate: Yup.date()
    .required('Joining Date is required'),
    gender: Yup.string().required('Please select your gender'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      joiningDate: '',
      gender: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Data:', values);
      alert('Form Submitted Successfully!');
    },
  });

  return (
    <div className="container">
      {/* Title section */}
      <div className="title">Staff Registration</div>
      <div className="content">
        {/* Formik Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="user-details">
            {/* Input for Full Name */}
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="error">{formik.errors.fullName}</div>
              )}
            </div>
            {/* Input for Email */}
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
            </div>
            {/* Input for Phone Number */}
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="error">{formik.errors.phoneNumber}</div>
              )}
            </div>
            {/* Input for Joining Date */}
            <div className="input-box">
              <span className="details">Joining Date</span>
              <input
                type="date"
                name="joiningDate"
                min={new Date().toISOString().split('T')[0]}
                value={formik.values.joiningDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.joiningDate && formik.errors.joiningDate && (
                <div className="error">{formik.errors.joiningDate}</div>
              )}
            </div>
          </div>
          {/* Gender Selection */}
          <div className="gender-details">
            <span className="gender-title">Gender</span>
            <div className="category">
              {/* Radio Buttons for Gender */}
              <label htmlFor="dot-1">
                <input
                  type="radio"
                  name="gender"
                  id="dot-1"
                  value="Male"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === 'Male'}
                />
                
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <input
                  type="radio"
                  name="gender"
                  id="dot-2"
                  value="Female"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === 'Female'}
                />
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <input
                  type="radio"
                  name="gender"
                  id="dot-3"
                  value="Prefer not to say"
                  onChange={formik.handleChange}
                  checked={formik.values.gender === 'Prefer not to say'}
                />
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
            {formik.touched.gender && formik.errors.gender && (
              <div className="error">{formik.errors.gender}</div>
            )}
          </div>
          {/* Submit button */}
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffRegistrationForm;
