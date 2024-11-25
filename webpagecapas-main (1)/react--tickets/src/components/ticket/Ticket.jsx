import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import axios from 'axios';
import '../../css/GeneradorQR.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import imagesData from "../../assets/img/imagescards.json";

const Ticket = () => {
    const [card, setCards] = useState([]); // Datos de tickets
    const [showQR, setShowQR] = useState({}); // Controla la visibilidad de los QR
    const [showTransferForm, setShowTransferForm] = useState(null); // Controla la visibilidad del formulario de transferencia
    const [transferEmail, setTransferEmail] = useState(''); // Estado para el correo del nuevo propietario

    const getRandomImage = () => {
        const images = imagesData.images;
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
       };

    // Obtener datos de la API
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/ticket/all',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
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

    // Manejar transferencia de ticket
    const handleTransfer = (ticketID) => {
        const formData = new FormData();
        formData.append('ticketID', ticketID);
        formData.append('newUserOwnerEmail', transferEmail);

        axios({
            method: 'patch',
            url: 'http://localhost:8080/ticket/transfer',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data', // Especificar el tipo de contenido
            },
            data: formData,
        })
            .then((response) => {
                toast.success('¡Transferencia exitosa!');
                setShowTransferForm(null); // Ocultar formulario
                setTransferEmail(''); // Limpiar el correo
                setTimeout(() => {
                    window.location.reload(); // Refrescar la página después de 1 segundo
                }, 1000);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error("El usuario al que desea transferir no existe");
                } else {
                    toast.error(`Error desconocido: ${error.message}`);
                }
            });
    };

    return (
        <>
            
            {card.map((product) => (
                <div
                    key={product.ticket_code}
                    className="flex flex-col bg-white h-full w-full rounded-xl border  border-neutral-500 shadow-xl shadow-black/60"
                >
                    <div className="text-end  rounded-xl text-[1.0rem]">
                        <p className="pr-[1em] pt-[0.5em]">{product.tier}</p>
                    </div>
                    <div className="flex">
                        <div className="flex h-full w-[100%] p-[1em]">
                            <img src={"https://cdn.prod.website-files.com/64ad227a3e66387fc5d89320/65cc59af2da41a018f861fae_concert-background-dd0syeox7rmi78l0.jpg"} alt={product.imagesData || "Product image"}/>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="flex-1 justify-items-center flex-col pr-[1.5em] h-auto">
                                <h1 className="text-[0.8em] text-center pb-[0.5em] xl:text-[1.5em]">{product.event}</h1>
                                <p className="text-[0.5em] xl:text-[0.9em] text-center">{product.eventDate}</p>
                                <div className="flex flex-row items-center gap-3  py-[1em]">
                                    <button
                                        onClick={() => toggleQR(product.ticket_code)}
                                        className="w-20 h-6/ text-[1em] bg-[#264E52] text-white"
                                    >
                                        Canjear
                                    </button>
                                    <button
                                        onClick={() => setShowTransferForm(product.ticket_code)}
                                        className="w-20 h-6 text-[1em] text-white bg-sky-900"
                                    >
                                        Transferir
                                    </button>
                                    {showQR[product.ticket_code] && (
                                        <section
                                            style={{
                                                position: 'fixed',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                zIndex: 9999,
                                                backgroundColor: '#ffffff',
                                                padding: '20px',
                                                borderRadius: '16px',
                                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            <QRCode
                                                value={product.ticket_code}
                                                size={256}
                                                bgColor="#ffffff"
                                                fgColor="#000000"
                                                level="L"
                                            />
                                            <button
                                                onClick={() => toggleQR(product.ticket_code)}
                                                style={{
                                                    position: 'absolute',
                                                    top: '-10px',
                                                    right: '-10px',
                                                    backgroundColor: '#FF6B6B',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '5px 10px',
                                                    borderRadius: '50%',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                ✕
                                            </button>
                                        </section>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer position="top-center" autoClose={3000} /> 
                    {showTransferForm === product.ticket_code && (
                        
                        <div
                            style={{
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 9999,
                                backgroundColor: '#ffffff',
                                padding: '20px',
                                borderRadius: '16px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <h2 className="text-xl font-bold mb-4">Transferir Ticket</h2>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleTransfer(product.ticket_code);
                                }}
                            >
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Correo del nuevo propietario:
                                </label>
                                <input
                                    type="email"
                                    value={transferEmail}
                                    onChange={(e) => setTransferEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                                    required
                                />
                                <div className="mt-4 flex justify-between">
                                    <button
                                        type="button"
                                        onClick={() => setShowTransferForm(null)}
                                        className="px-4 py-2 bg-red-400 text-white rounded-lg"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default Ticket;
