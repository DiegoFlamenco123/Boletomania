import React from "react";
import ScanQR from '../../components/scanQR/ScanQR'
import Navbar from "../../components/header/Navbar";


function ScannerQR() {
    return(
        <>
        <Navbar/>
        <div className="h-screen flex flex-col justify-center items-center min-w-2 m-auto">
        <div className="text-center mx-12 space-y-6">
            <h1 className="text-2xl font-bold">
                Scan QR code
            </h1>
            <p className="text-[1.1em]">
                Place qr code inside the frame to scan please avoid shake to get results quickly
            </p>
        </div>
        <div className="flex mx-12 my-24 sm:mx-24 sm:my-24 lg:mx-[35%] lg:my-20 justify-center">
        <ScanQR/>
        </div>
        <div className="bg-[#4A7E86] text-white text-center mx-24 py-4 sm:mx-40 sm:py-4 lg:mx-0 lg:w-[25%] lg:py-4 rounded-md">
            <p className="text-xl px-4 lg:text-[1.4em]">
                Place Camera Code
            </p>
        </div>
        </div>

        </>
    )
}

export default ScannerQR;