import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/img/BoletoCompleto.png'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

  //const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();

    const usernameVal = usernameRef.current.value;
    const emailVal = emailRef.current.value;
    const passwordVal = passwordRef.current.value;

    if (!usernameVal || !passwordVal || !emailVal) {
      toast.error("Ingrese sus credenciales");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/auth/signup', {
        email: emailVal,
        name: usernameVal,
        password: passwordVal,

      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )

      if (response.status === 201) {
        toast.success('Usuario Creado Exitosamente!', {
          position: toast.POSITION.TOP_CENTER
      });
      }
    } catch (error) {

      const { response } = error;

      let mess = "";

      if (response.status === 401) mess = "Datos Erroneos, intente de nuevo";
      else if (response.status === 400) mess = "Usuario Existente";
      else if (response.status === 500) mess = "Error con el servidor";
      else if (response.status === 404) mess = "Usuario inexistente";
      toast(mess, { type: "warning" });
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%         ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <img
          className="h-11 w-auto mx-auto "
          src={logo}
          alt="Your Company"
        />
        <h1 className="text-3xl font-semibold text-center text-purple-700 ">
          Register
        </h1>

        <form className="mt-6" onSubmit={onSubmit}>
          <ToastContainer />
          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
              htmlFor="R-username"
            >
              Username
            </label>

            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="R-username"
              type="text"
              ref={usernameRef}
            />
          </div>

          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
              htmlFor="R-email"
            >
              Email
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="R-email"
              type="text"
              ref={emailRef}
            />
          </div>

          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
              htmlFor="R-password"
            >
              Password
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="R-password"
              type="password"
              ref={passwordRef}
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type="submit">
              Register
            </button>
          </div>


        </form>

        <div className="mt-6 flex justify-center">
          <Link to="/">
            <button className="w-[px-50] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              volver

            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};
export default Register;
