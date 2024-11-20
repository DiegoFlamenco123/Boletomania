import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";



const TicketPurchaseView = () => {

  const [pasandoVariable, setPasandoVariable] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const {id} = useParams();


  useEffect(() => {
    
    axios({
      method: "get",
      url: `http://localhost:8080/event/${id}`,

      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      setPasandoVariable(response.data);
    
    });
  }, []);

  return (
    <div className="bg-gray-400 min-h-min flex flex-col items-center">
       
      <div className="w-full">
        <div className="relative">
          <img
            src="https://i0.wp.com/tailschannel.com/wp-content/uploads/2021/11/STEVEAOKIHERO.png?resize=1920%2C1024&ssl=1"
            className="w-full h-96 sm:h-60 md:h-80 object-cover"
          />
          <div className='absolute py-[50px] sm:py-[90px] bottom-0 left-0 right-0 bg-black bg-opacity-75 h-full p-4 text-white'>
          <div className="">
            <h1 className="text-[50px] px-10 sm:text-5xl font-bold">{pasandoVariable.title}</h1>
            <div className="mt-2">
              <p className="text-[18px] px-10 p-4 sm:text-xl text-white">Lugar: {pasandoVariable.siteName}</p>
              <p className="text-[18px] px-10 sm:text-xl text-white">Fecha: {pasandoVariable.date}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPurchaseView;