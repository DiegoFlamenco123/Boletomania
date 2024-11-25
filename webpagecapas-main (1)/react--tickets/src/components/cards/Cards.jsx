import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TicketPurchaseView from "../ticketPurchaseView/TicketPurchaseView";
import imagesData from "../../assets/img/images.json"

  var prueba = []
  var datosObtenidos = []


  const Cards = () => {
  
    const navigate = useNavigate();
    
    const [pasandoVariable, setPasandoVariable] = useState([]);

    const [card, setCards] = useState({
      data: [],
    });

    
    const getRandomImage = () => {
    const images = imagesData.images;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
   };

    useEffect(() => {
    
      axios({
        method: "get",
        url: "http://localhost:8080/event/main/all",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
      
        setCards(response.data);
        
        prueba = response.data;
        console.log(prueba);
        
      });
    }, []);

    const handleClick = (prueba) => {
      axios({
        method: "get",
        url: `http://localhost:8080/event/${prueba.title}`,

        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
          
         datosObtenidos = response.data;
        
        setPasandoVariable(datosObtenidos);
        
        console.log();
        navigate(`/ticketPurchase/${prueba.title}`);

      });
      
    };
    
    console.log(pasandoVariable);

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-24 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {prueba.map((product) => (
              <div key={product.id} className="group relative" onClick={() => handleClick(product)}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={getRandomImage()}
                    alt={product.imagesData || "Product image"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 bg-nav-color bg-opacity-30 shadow-lg rounded-lg flex justify-center items-center">
                  <div className=''>
                    <h3 className="text-xl font-semibold text-black ">
                    
                        <span aria-hidden="true" className="absolut inset-0" />
                        {product.title}
            
                    </h3>
                  
                  </div>
                
                </div>
              </div>
            ))}
          </div>
        </div>
        
      
      </div>
    )
  }
  export default Cards;