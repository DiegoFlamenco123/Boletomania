import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../../css/GeneradorQR.css'
import QRCode from 'react-qr-code'
import axios from 'axios'

var prueba = []

const Ticket = () => {
    const [card, setCards] = useState([]); // Datos de tickets
    const [showQR, setShowQR] = useState({}); // Controla la visibilidad de los QR

    // Obtener datos de la API
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/ticket/all',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            console.log(response.data); // Verificar datos recibidos
            setCards(response.data); // Actualizar estado con tickets
        });
    }, []);

    // Alternar visibilidad del QR para un ticket específico
    const toggleQR = (ticket_code) => {
        setShowQR((prevState) => ({
            ...prevState,
            [ticket_code]: !prevState[ticket_code], // Alterna solo el QR del ticket correspondiente
        }));
    };

    // Renderizar los tickets
    return (
        <>
            {card.map((product) => (
                <div
                    key={product.ticket_code} // Asegurar clave única
                    className="flex flex-col bg-white h-full w-full rounded-xl border border-blue-900 shadow-md shadow-black/60"
                >
                    <div className="text-end text-[0.6em]">
                        <p className="pr-[1em] pt-[0.5em]">{product.tier}</p>
                    </div>
                    <div className="flex">
                        <div className="flex h-full w-[100%] p-[1em]">
                            <img src="/src/assets/img/ticketImg.webp" alt="" />
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="flex-1 flex-col pr-[1.5em] h-auto">
                                <h1 className="text-[0.8em] pb-[0.5em] xl:text-[1.5em]">{product.event}</h1>
                                <p className="text-[0.5em] xl:text-[0.7em] text-justify">{product.eventDate}</p>
                                <div className="flex flex-row justify-between items-center py-[1em]">
                                    <button
                                        onClick={() => toggleQR(product.ticket_code)}
                                        className="w-20 h-6/ text-[1em] bg-[#264E52] text-white"
                                    >
                                        Canjear
                                    </button>
                                    {showQR[product.ticket_code] && (
                                        <section className="blockQR">
                                            <QRCode
                                                value={product.ticket_code} // Código único de cada ticket
                                                size={256}
                                                bgColor="#282c34"
                                                fgColor="#fff"
                                                level="H"
                                                style={{
                                                    position: 'fixed',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    zIndex: 9999,
                                                }}
                                            />
                                           <button
											onClick={() => toggleQR(product.ticket_code)}
											style={{
												position: 'fixed',
												top: '10%',
												right: '10%',
												zIndex: 9999,
												color: '#fff', // Texto blanco
												backgroundColor: '#264E52', // Fondo con color verde oscuro
												padding: '10px 20px', // Espaciado interno para hacer el botón más grande
												border: 'none', // Sin borde
												borderRadius: '8px', // Bordes redondeados
												cursor: 'pointer', // Cambiar el cursor a "mano" al pasar por encima
												fontSize: '14px', // Tamaño del texto
												fontWeight: 'bold', // Hacer el texto negrita
											}}
										>
											Cerrar
</button>
                                        </section>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Ticket;
