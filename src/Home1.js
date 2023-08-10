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
    <div className="flex justify-center items-start h-screen home_container">
       <style>
        {`
          @keyframes colorChange {
            0% { color: red; }
            25% { color: blue; }
            50% { color: green; }
            75% { color: orange; }
            100% { color: purple; }
          }

          @keyframes randomAnimation {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateY(10px); }
            50% { transform: translateX(-10px); }
            75% { transform: translateY(-10px); }
            .random-font {
              font-family: 'Arial', sans-serif;
              /* Add more font style attributes here */
            } 
        `}
      </style>
      <h1 className="text-3xl font-bold text-red-500 animate-color-change animate-random-color animate-random-animation" style={{ color: '#F5575C' }}>ℌ𝔬𝔪𝔢𝔄𝔴𝔞𝔶 ℌ𝔞𝔳𝔢𝔫: 𝔘𝔫𝔳𝔢𝔦𝔩𝔦𝔫𝔤 𝔘𝔫𝔦𝔮𝔲𝔢 𝔖𝔱𝔞𝔶𝔰 𝔴𝔦𝔱𝔥 𝔄𝔦𝔯𝔟𝔫𝔟</h1>
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
    <div className="back_img">
        <div className="flex items-center justify-center h-screen-3/4">
           <div className="border  border-black-500 p-4 rounded-lg shadow-md  bg-blue-200">
        <div className="w-96 h-56 bg-white rounded-lg p-8">
          <style>
        {`
          @keyframes colorChange {
            0% { color: red; }
            25% { color: blue; }
            50% { color: green; }
            75% { color: orange; }
            100% { color: purple; }
          }

          @keyframes randomAnimation {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateY(10px); }
            50% { transform: translateX(-10px); }
            75% { transform: translateY(-10px); }
            .random-font {
              font-family: 'Arial', sans-serif;
              /* Add more font style attributes here */
            } 
        `}
      </style>
      <h1 className=" text-2xl mb-4 font-bold uppercase animate-color-change animate-random-color animate-random-animation">𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔸𝕀ℝ𝔹ℕ𝔹</h1>
         <form onSubmit={handleSubmit}>
              <h2 className="text-2xl mb-4 font-bold">
              <span className="text-green-500">Login/</span>
              <span className="text-purple-500">
              <Link to={'/signin'} className="hover:text-yellow-500">Sign Up</Link>
              </span>
              </h2>
                        {/* <h2 className="text-2xl mb-4 font-bold text-purple-700 tracking-wide">
                    Login/<Link to={'/signin'}>Sign Up</Link>
                        </h2> */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border rounded px-3 py-2 shadow-md"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            name="username"
          />
          {touched.username && errors.username ? (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          ) : null}
        {/* </div> */}
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
            className="eye"
            onClick={handleToggle}
          >
            {passwordIcon}
          </span>
          {touched.password && errors.password ? (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          ) : null}
        </div>
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded ${
            formState === 'error' ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-600 hover:bg-green-500'   
          } text-white font-bold `}
        >
          {formState === 'error' ? 'Retry' : 'Login'}
        </button>
      </form>
      </div><br/><br/><br/><br/><br/>
      {roleId ? (
        <button onClick={() => logout()} className="bg-orange-500 text-white px-4 py-2 rounded my-4 hover:bg-red-500">
          Logout
        </button>
      ) : null}
    </div>
    </div>
    </div>
  );
}

export default Home;

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('roleId');
  window.location.href = '/';
}
