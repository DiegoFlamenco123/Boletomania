import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import Ticket from '../../components/ticket/Ticket'
import '../../css/GeneradorQR.css'
import Navbar from '../../components/header/Navbar'

function Tickets() {
	return (
		<>
			<Navbar />

<div className="pt-40 lg:pt-12 h-full bg-white">
                <div className="relative xl:container m-auto pb-10 px-6 md:px-12 lg:px-6">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-r-2">
                        <Ticket />
                    </div>
                </div>
            </div>

		</>
	)
}

export default Tickets
