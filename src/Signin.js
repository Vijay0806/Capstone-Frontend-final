import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { API } from  "./global";

const movieValidationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(8),
});

function Signin() {
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
      const data = await fetch(API + '/' + 'signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (data.status === 401) {
        console.log('username already exists');
        setFormState('error');
      } else {
        const result = await data.json();
        console.log('success', result);
        navigate('/login');
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
      >
        <h2 className="text-2xl mb-4">SIGN UP</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
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
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
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
          {formState === 'error' ? 'Retry' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export function SignOut() {
  return (
    <div>
      <button onClick={() => logout()} className="bg-red-500 text-white px-4 py-2 rounded">
        Sign Out
      </button>
    </div>
  );
}

export default Signin;

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('roleId');
  window.location.href = '/';
}
