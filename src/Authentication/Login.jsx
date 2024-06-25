// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg from "../Images/bg-login-01.jpg";
import logo from "../Images/LOGO_SEIDOR.jpg";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/login"
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        email: email,
        password: password
      }
    ).then(function (res) {
      navigate("/dashboard");
    });
  }

  return (
    <div 
      className="grid grid-cols-2 bg-none h-screen " >
        
    <div style={{ 
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'end',
      }}
      className='bg-black col-span-1 '>
            /
    </div>
    <div className='flex flex-col span-2 justify-center items-center bg-white'>
        <div className=''>
        <div className=' px-3 py-4 flex justify-center items-center'>
        <img className=" w-72" src={logo} alt=""/>
        </div>
      <form onSubmit={submitLogin} className="col-span-1 p-6 rounded-xl h-min w-96">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 w-full px-3 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="bg-[#4a90e2] mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Log in
        </button>
      </form>
      <div className='flex justify-center items-center font-medium text-txtstl text-xs'>
        <span>Vous n'avez pas de compte ? Vous pouvez&nbsp;</span>
         <a href='/register' className='font-semibold text-pc'> Inscrire</a>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Login;