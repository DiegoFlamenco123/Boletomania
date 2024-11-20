import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../../css/GeneradorQR.css'
import QRCode from 'react-qr-code'
import axios from 'axios'

var prueba = []

const Ticket = () => {
	const navigate = useNavigate()

	const [pasandoVariable, setPasandoVariable] = useState({
		data: [prueba.title],
	})

	const [card, setCards] = useState({
		data: [],
	})

	const [showQR, setShowQR] = useState({});
	const toggleQR = (productId) => {
		setShowQR(prevState => ({
			...prevState,
			[productId]: !prevState[productId]
		}));
	};

	useEffect(() => {
		axios({
			method: 'get',
			url: 'http://localhost:8080/ticket/all',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		}).then((response) => {
			setCards(response.data)

			prueba = response.data
			console.log(response.data)
		})
	}, [])

	return (
		<>
			{prueba.map((product) => (
				<div className="flex flex-col bg-white h-full w-full rounded-xl border border-blue-900 shadow-md shadow-black/60 ">
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
									<div className="flex h-6 w-16 items-center">
										<img src="/src/assets/img/fedecredito.png" alt="" />
									</div>
									<button
										onClick={() => toggleQR(product.ticketNumber)}
										className="w-20 h-6/ text-[1em] bg-[#264E52] text-white"
									>
										Canjear
									</button>
									<section className={showQR[product.ticketNumber] ? 'blockQR' : 'hidden'}>
										<button
											className={showQR[product.ticketNumber] ? 'QR' : 'hidden'}
											onClick={() => toggleQR(product.ticketNumber)}
											style={{
												position: 'fixed',
												top: '10%',
												right: '10%',
												transform: 'translate(-50%, -50%)',
												zIndex: 9999,
											}}
										>
											{' '}
											<svg
												className="h-8 w-8 text-gray-600"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<line x1="18" y1="6" x2="6" y2="18" />
												<line x1="6" y1="6" x2="18" y2="18" />
											</svg>
										</button>
										<QRCode
											className="border-[10px] p-1.6 border-white overflow-visible"
											value={product.ticket_code}
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
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Ticket
