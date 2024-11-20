import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Navbar from "../../components/header/Navbar"
import MenuAdmin from "../../components/AdminView/MenuAdmin"



var prueba = [];

const createTier = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [info, setinfo] = useState([]);


  const tierNameRef = useRef(null);
  const tierCapacityRef = useRef(null);
  const tierPriceRef = useRef(null);
  

  useEffect(() => {

    axios({
      method: "get",
      url: "http://localhost:8080/event/main/all",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {

      setinfo(response.data);
      prueba = response.data;
     

    });
  }, []);

    console.log(info);

  async function onSubmit(e) {
    e.preventDefault();

    const tierName = tierNameRef.current.value;
    const tierCapacity = tierCapacityRef.current.value;
    const tierPrice = tierPriceRef.current.value;
    


    // if (!Orgname) {
    //   toast.error("Ingrese sus credenciales");
    //   return;
    // }

    try {
      const response = await axios.post('http://localhost:8080/event/tier/create', {

        name: tierName,
        capacity: tierCapacity,
        price: tierPrice,
        nameEvent: selectedOption,

      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }
      )
      if (response.status === 201) {
        toast.success('Tier Creado Exitosamente!', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {

      const { response } = error;

      let mess = "";

      if (response.status === 401) mess = "Datos Erroneos, intente de nuevo";
      else if (response.status === 400) mess = "Datos Erroneos";
      else if (response.status === 500) mess = "Error con el servidor";
      else if (response.status === 404) mess = "Usuario inexistente";
      toast(mess, { type: "warning", position: toast.POSITION.TOP_CENTER });
    }
  }

  console.log(selectedOption);

  return (
    <>
      <Navbar />
      <MenuAdmin />

      <div className="relative flex flex-col justify-center pt-12 overflow-hidden">

<div className="w-full p-16 m-auto bg-gray-100 rounded-md shadow-xl lg:max-w-xl">

      <form className="" onSubmit={onSubmit}>
        <ToastContainer />
        <div className="grid gap-6 mb-6 lg:grid-cols-1">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="Tier-name"
            >
              Nombre del Tier
            </label>
            <input
              type="text"
              id="Tier-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ingrese el nombre del tier"
              required
              ref={tierNameRef}
            />
          </div>
          <div>
            <label
              htmlFor="Tier-capacity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Capacidad
            </label>
            <input
              type="text"
              id="Tier-capacity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ingrese la capacidad maxima del tier"
              ref={tierCapacityRef}
              required
            />
          </div>
          <div>
            <label
              htmlFor="Tier-price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Precio
            </label>
            <input
              type="text"
              id="Tier-price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ingrese el precio del tier"
              ref={tierPriceRef}
              required
            />
          </div>

          <div>
            <label
              for="categoria"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Seleccione el evento
            </label>

            <select
              id="involucrados"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2"
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              <option value="" selected readOnly >Seleccione una opción</option> {/* Opción predeterminada */}
              {info.map((product) => (

                <React.Fragment key={product.title}>
                  <option value={product.title}>
                    {product.title}
                  </option>
                </React.Fragment>
              ))}
            </select>

          </div>
        </div>
        <div className="flex justify-center gap-6">
          <Link
            to="/peopleView"
            className="text-black bg-nav-color hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Atras
          </Link>

          <button
            type="submit"
            className="text-black bg-nav-color hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onSubmit={onSubmit}
          >
            Guardar
          </button>
        </div>


      </form>
      </div>
      </div>
    </>
  );
};
export default createTier;