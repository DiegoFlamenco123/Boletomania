import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"


var list = []

const TicketPriceComponent = () => {

  const [pasandoVariable, setPasandoVariable] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [list, setList] = useState([]);
  const [date, setDate] = useState([]);
  const [Url, setUrl] = useState([]);
  const {id} = useParams();

  const handleItemClick = () => {
    // Perform an action or navigate to a specific URL based on the clicked item's ID
    console.log("dentro de la tabla");
  };
  

  useEffect(() => {
    
    axios({
      method: "get",
      url: `http://localhost:8080/event/${id}`,

      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      setList(response.data.tiers);
      setDate(response.data.date);
      setUrl(response.data.title);
    });

  }, []);

 
 
  return (
    
    <div className="flex items-center justify-center h-screen">
      
      <div className="relative w-11/12  sm:w-3/4  top-60  bg-white shadow-xl rounded-xl  ">
        
        <div className="w-full sm:w-1/2 h-screen sm:px-8">
          <h2 className=" text-xl px-5 sm:px-10 py-10 font-bold">Localidades</h2>
        
          {list.map((product) => (
          <table class="w-full" >
            <tbody>
            <tr class="border-b border-gray-100">
            <td
                className="p-5 sm:px-10 text-lg sm:text-lg pr-4"
                onClick={() => handleItemClick}
              >
                <a href="#">{product.name}</a>
              </td>
              <td class="font-semibold  p-5 text-large text-right">${product.price}*</td>
            </tr>
          
            </tbody>
          </table> 
           ))}
          <p className="text-base p-5 sm:text-base">*Aplica cargo adicional por servicio boletomania $7.00</p>
         
        </div>
        

        
        {/* container grande de la caja de funciones */}
        <div className=" sm:absolute py-[40px] px-[] flex flex-wrap justify-center right-0 top-0 w-full sm:w-1/2 h-full">

          {/* div de la caja de funciones */}
          
          <div className=" bg-gray-100 h-full w-[300px] px-[16px] sm:h-[30%] md:9/12 lg:w-9/12 2xl:w-9/12 sm:w-9/12 rounded-xl">

            <h2 className=" text-xl  border-b px-2  sm:px-5 py-5 sm:py-5 font-bold">Funciones</h2>
            
            <table className="w-full justify-center items-center">
              <tr className="border-b border-gray-200 ">
                <td className="p-5 sm:p-4 md:p-4">
                  <h5 className=" text-lg p-0 sm:text-lg  text-left">{date}</h5>
                </td>

                <td className=" text-right p-5">
                  
                <Link to={`/buy/${Url}`}> 
                  <button className="hover:bg-blue-200 text-xs sm:text-sm text-black font-semibold px-2  py-2  border border-black rounded shadow-lg sm:px-3 sm:py-2 md:px-5 md:py-2 lg:px-7 lg:py-2 ">
                    Comprar
                  </button>
                  </Link>
                 
                </td>
              </tr>
            </table>
        
          
          </div>
          

          <div className=" flex flex-wrap py-14 justify-center w-[300px] sm:px-5 sm:w-9/12 ">

            <h2 className="text-xl font-bold h-10 w-full px-5 ">Recomendaciones</h2>
            <p className="h-full text-large w-full px-5">Recuerda que únicamente puede recoger los tickets el titular de la tarjeta con la que se realizó la compra presentando su documento de identificación y la tarjeta con la cual fue realizada la transacción.</p>

          </div>

          
        </div>
       
      </div>
    </div>
    
  );
};

export default TicketPriceComponent;