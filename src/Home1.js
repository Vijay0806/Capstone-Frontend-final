import  {Card, TextField} from "@mui/material";
import {Button} from "@mui/material";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { API } from './global';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const movieValidationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(8),
});

function Home() {
  return (
    <div className="home_container">
      {/* Your content goes here */}
    </div>
  );
}

export function LoginForm() {
  const roleId = localStorage.getItem('roleId');
  const handleToggle = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setPasswordIcon(<FaEye />);
    } else {
      setPasswordType('password');
      setPasswordIcon(<FaEyeSlash />);
    }
  };

  const [passwordType, setPasswordType] = useState('password');
  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);
  const [formState, setFormState] = useState('success');
  const navigate = useNavigate();
  const {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: movieValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const data = await fetch(API + '/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (data.status === 401) {
        console.log('error');
        setFormState('error');
      } else {
        const result = await data.json();
        console.log('success', result);
        localStorage.setItem('token', result.token);
        localStorage.setItem('roleId', result.roleId);
        navigate('/Amazing');
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
      >
        <h2 className="text-2xl mb-4">
          Login/<Link to={'/signin'}>Sign Up</Link>
        </h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            name="username"
          />
          {touched.username && errors.username ? (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          ) : null}
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type={passwordType}
            id="password"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            name="password"
          />
          <span
            className="absolute right-3 top-1/2 -mt-2 cursor-pointer"
            onClick={handleToggle}
          >
            {passwordIcon}
          </span>
          {touched.password && errors.password ? (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded ${
            formState === 'error' ? 'bg-red-500' : 'bg-blue-500'
          } text-white font-bold`}
        >
          {formState === 'error' ? 'Retry' : 'Login'}
        </button>
      </form>
      {roleId ? (
        <button onClick={() => logout()} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      ) : null}
    </div>
  );
}

export default Home;

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('roleId');
  window.location.href = '/';
}
