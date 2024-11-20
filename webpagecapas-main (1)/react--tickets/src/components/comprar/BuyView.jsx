
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState, Fragment, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const products = [
  {
    id: 1,
    name: 'Wos',
    color: 'Mesa Ultra Platinum',
    price: '$175.00',
    quantity: 1,
    imageSrc: 'https://static.wixstatic.com/media/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg/v1/fit/w_2500,h_1330,al_c/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },

  // More products...
]

var uuidtier = "cec3ca11-afd0-467a-b2b8-33bd034bf366"
var full = []
var data = []


const Example = () => {



  const tierRef = useRef(null);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  const purchaseDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


  const [selectedOption, setSelectedOption] = useState('');
  const [tierSelectedOption, setTierSelectedOption] = useState('');
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);
  const [Url, setUrl] = useState([]);
  const [full, setFullArray] = useState([]);

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { id } = useParams();

  //variable temporal en lo que se arregla la api para recibir el uuid del tier

  const handleCheckout = () => {
    const confirmation = window.confirm("Are you sure you want to proceed with the purchase?");
    if (confirmation) {
      onSubmit();
      console.log("Purchase confirmed");
    } else {
      // User cancelled, do nothing
      console.log("Purchase cancelled");
    }
  };

  async function onSubmit(e) {
    e.preventDefault();



    // if (!username || !password) {
    //   toast.error("Ingrese sus credenciales");
    //   return;
    // }

    try {
      const response = await axios.post('http://localhost:8080/ticket/save', {
        tier: tierSelectedOption, // Aqui deberia ir tierSelectedOption ya que esta contiene el valor del nombre del tier, pero tiene que cambiarse la api para recibir uuid 
        purchaseDate: purchaseDate,

      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'multipart/form-data',

        }
      }
      )

      if (response.status === 201) {
        toast.success('Ticket Comprado Exitosamente!', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {

      const { response } = error;

      let mess = "";

      console.log(selectedOption)
      console.log(purchaseDate)

      if (response.status === 401) mess = "Datos Erroneos, intente de nuevo";
      else if (response.status === 400) mess = "Datos Erroneos";
      else if (response.status === 500) mess = "Error con el servidor";
      else if (response.status === 404) mess = "Usuario inexistente";
      toast(mess, { type: "warning" });
    }
  }



  // -----------------------------------------------------------------------------//


  useEffect(() => {

    axios({
      method: "get",
      url: `http://localhost:8080/event/${id}`,

      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      setFullArray(response.data);
      setData(response.data.tiers);
      setDate(response.data.title);
      setUrl(response.data.title);

      

    });

  }, []);

  console.log(date)
  console.log(tierSelectedOption)


  const goBack = () => {
    window.history.back(); // Go back to the previous URL
  };
  const [open, setOpen] = useState(true)

  return (

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <Link to={"/ticketPurchase"}>
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={goBack}
                            >

                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">

                            <li key={"product.id"} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={"https://static.wixstatic.com/media/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg/v1/fit/w_2500,h_1330,al_c/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg"}
                                  alt={"product.imageAlt"}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={"product.href"}>{date}</a>
                                    </h3>

                                  </div>

                                  <div>
                                    <label
                                      for="categoria"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                      Seleccione la localidad deseada
                                    </label>

                                    <select
                                      id="involucrados"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2"

                                      value={`${selectedOption} || ${tierSelectedOption}`}
                                      onChange={(e) => {
                                        const [price, uuid] = e.target.value.split(' || '); // Split the value into price and name
                                        setSelectedOption(price);
                                        setTierSelectedOption(uuid);
                                      }}

                                    >
                                      <option value="" selected readOnly >Seleccione una opción</option> {/* Opción predeterminada */}
                                      {data.map((product) => (
                                        <React.Fragment key={product.name}>
                                          <option value={`${product.price} || ${product.uuid}`}>
                                            {product.name} ${product.price}
                                          </option>
                                        </React.Fragment>
                                      ))}
                                    </select>

                                  </div>

                                </div>

                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500 pt-5">Qty 1</p>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>


                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <ToastContainer />
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${selectedOption}*</p>
                      </div>

                      <p className="mt-0.5 text-sm text-gray-500">taxes calculated at checkout.</p>
                      <div className="mt-6" >

                        <a
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          type='submit'
                          onClick={onSubmit}
                        >
                          Checkout
                        </a>

                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => { }}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Example
