import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg from "../Images/bg-login-01.jpg";
import logo from "../Images/LOGO_SEIDOR.jpg";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest', // Optional, but sometimes needed
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  }
});

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordconfirmation] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function submitRegistration(e) {
    e.preventDefault();
    if (password !== passwordconfirmation) {
      setError("Passwords do not match");
      return;
    }

    client.post(
      "/register",
      {
        email: email,
        name: username,
        password: password,
        password_confirmation: passwordconfirmation
      },
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        }
      }
    ).then(function (res) {
      client.post(
        "/login",
        {
          email: email,
          password: password
        }
      ).then(function (res) {
        navigate("/dashboard");
      }).catch(function (error) {
        console.log("Login Error:", error.response?.data || error.message);
        setError(error.response?.data?.message || "An error occurred during login");
      });
    }).catch(function (error) {
      console.log("Registration Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred during registration");
    });
  }

  return (
    <div className="grid grid-cols-2 bg-none h-screen">
      <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
        className='bg-black col-span-1 '>
        /
      </div>
      <div className='flex flex-col span-2 justify-center items-center bg-white'>
        <div className=''>
          <div className=' px-3 py-4 flex justify-center items-center'>
            <img className=" w-72" src={logo} alt="" />
          </div>
          <form onSubmit={submitRegistration} className="col-span-1 p-6 rounded-xl h-min w-96">
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2"> Address email</label>
              <input
                type="email"
                placeholder="Entrer votre email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                type="text"
                placeholder="Entrer username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="mt-1 w-full px-3 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">confirmer le Password</label>
              <input
                type="password"
                placeholder="confirmer le Password"
                value={passwordconfirmation}
                onChange={e => setPasswordconfirmation(e.target.value)}
                className="mt-1 w-full px-3 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {error && (
              <div className="mb-4 text-red-600 text-sm">
                {error}
              </div>
            )}
            <button type="submit" className="bg-[#4a90e2] mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Register
            </button>
          </form>
          <div className='flex justify-center items-center font-medium text-txtstl text-xs'>
            <span>Vous avez déjà un compte ? Vous pouvez&nbsp;</span>
            <a href='/login' className='font-semibold text-pc'>  Connecter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
