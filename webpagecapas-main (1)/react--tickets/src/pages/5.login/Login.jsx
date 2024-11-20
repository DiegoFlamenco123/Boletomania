import React, { useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import logo from '../../assets/img/BoletoCompleto.png';

const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      toast.error("Ingrese sus credenciales");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/auth/signin', {
        username: username,
        password: password,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {

      const { response } = error;

      let mess = "";

      if (response.status === 401) mess = "Datos Erroneos, intente de nuevo";
      else if (response.status === 400) mess = "Datos Erroneos";
      else if (response.status === 500) mess = "Error con el servidor";
      else if (response.status === 404) mess = "Usuario inexistente";
      toast(mess, { type: "warning" });
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <img
          className="h-11 w-auto mx-auto"
          src={logo}
          alt="Your Company"
        />
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign in
        </h1>
        <form
          className="mt-6"
          onSubmit={onSubmit}
        >
          <ToastContainer />
          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
              htmlFor="L-username"
            >
              Email
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="L-username"
              type="text"
              placeholder="Username"
              ref={usernameRef}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
              htmlFor="L-password"
            >
              Password
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="L-password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <Link to="/setPassword">
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          </Link>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type="submit">
              Login
            </button>
          </div>
        </form>


        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          No tienes una cuenta?{" "}
          <Link to="/register">
            <a className="font-medium text-purple-600 hover:underline">
              Regístrate
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;