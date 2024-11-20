import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const CreateTicket = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  const [selectedOrganiserOption, setOrganiserSelectedOption] = useState('');
  const [selectedSponsorOption, setSponsorSelectedOption] = useState('');
  const [selectedSiteOption, setSiteSelectedOption] = useState('');

  var padreTiempo = (selectedDate + " " + selectedTime +":00" );

  const [sponsor, setSponsor] = useState([]);
  const [site, setSite] = useState([]);
  const [organizer, setOrganizer] = useState([]);

  const titleRef = useRef(null);
  const duracionRef = useRef(null);
 
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(`${date}`);
  };

  const handleTimeChange = (event) => {
    const time = event.target.value;
    setSelectedTime(`${time}`);
  };

  console.log(padreTiempo)
  console.log(selectedTime)

  useEffect(() => {
    //sponsor
    axios({
      method: "get",
      url: "http://localhost:8080/sponsor/all",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {

      setSponsor(response.data);
    });

    //site
    axios({
      method: "get",
      url: "http://localhost:8080/site/all",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {

      setSite(response.data);
    });

    //organizer
    axios({
      method: "get",
      url: "http://localhost:8080/organizer/all",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      setOrganizer(response.data);
    });
  }, []);


  async function onSubmit(e) {
    e.preventDefault();

    const titleVal = titleRef.current.value;
    const duracionVal = duracionRef.current.value;

    try {
      const response = await axios.post('http://localhost:8080/event/create', {
        organizer: selectedOrganiserOption,
        sponsor: selectedSponsorOption,
        site: selectedSiteOption,
        title: titleVal,
        date: padreTiempo,
        duration: duracionVal,

      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'multipart/form-data'
        }
      }
      )

      if (response.status === 201) {
        toast.success('Evento Creado Exitosamente!', {
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

console.log(padreTiempo)

  return (

    <>
      <div className="max-w-6xl mx-auto bg-white p-16 flex justify-center gap-x-40">
        <form className=" w-full md:w-1/2 gap-x-32 p-0">
          <div>
            <div className="flex justify-center py-10 items-center bg-white">
              <div className="w-full lg:w-1/2 relative grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-gray-100 rounded-lg">
                <div className="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
                  <label
                    className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                    for="restaurantImage"
                  >
                    Select image
                    <input
                      id="restaurantImage"
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                    />
                  </label>
                </div>
                <div className="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                  <span className="text-gray-400 opacity-75">
                    <svg
                      className="w-14 h-14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="0.7"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <ToastContainer />

            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="C-title"
                >
                  Titulo del Evento
                </label>
                <input
                  type="text"
                  id="C-title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Escriba el nombre del titulo"
                  ref={titleRef}
                  required
                />
              </div>
              <div>
                <label
                  for="involucrados"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Organizadores
                </label>
                <select
                  id="involucrados"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectedOrganiserOption}
                  onChange={(event) => setOrganiserSelectedOption(event.target.value)}
                >
                  <option value="" selected readOnly >Seleccione una opción</option> 
                  {organizer.map((product) => (
                  <option value={product.code}>{product.organizer}</option>
                  ))}
                </select>
              </div>

              {/* aqui vale el input de la fecha  */}
              <div>
                <label
                  for="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Fecha
                </label>
                <input
                  type="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleDateChange}
                  required
                />
              </div>

              {/* aqui vale el input de la hora  */}
              <div>
                <label
                  for="hora"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Hora
                </label>
                <input
                  type="time"
                  id="hora"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleTimeChange}
                  placeholder="123-45-678"
                  required
                />
              </div>

              {/* aqui vale el input de la duracion  */}
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="C-duracion"
                >
                  Duracion del evento
                </label>
                <input
                  type="text"
                  id="C-duracion"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="HH-MM-SS"
                  ref={duracionRef}
                  required
                />
              </div>


              <div>
                <label
                  for="categoria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Lugar del Evento
                </label>
                <select
                  id="involucrados"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectedSiteOption}
                  onChange={(event) => setSiteSelectedOption(event.target.value)}
                >
                  <option value="" selected readOnly >Seleccione una opción</option> 
                  {site.map((product) => (
                  <option value={product.code}>{product.name}</option>
                  ))}
                </select>
              </div>
            </div>


            <div className="mb-6">
              <label
                for="patrocinadores"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sponsor
              </label>
              
              <select
                id="involucrados"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedSponsorOption}
                onChange={(event) => setSponsorSelectedOption(event.target.value)}
              >
                <option value="" selected readOnly >Seleccione una opción</option> 
                {sponsor.map((product) => (
                <option value={product.code}>{product.sponsor}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="">

          </div>

          <div className="flex justify-center">

            <Link
              to="/eventsView"
              className="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Atras
            </Link>


            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onSubmit}
            >
              Guardar
            </button>


          </div>
        </form>
      </div>
    </>
  );
}

export default CreateTicket;