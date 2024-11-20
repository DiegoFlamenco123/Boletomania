import React, { useState } from 'react'
import Reader from 'react-qr-scanner'
import '../../css/GeneradorQR.css'
import {AiFillSmile} from "react-icons/ai"

function ScannerQR() {
	const [scanned, setScanned] = useState(false)
	const handleScan = (result) => {
		if (!!result) {
			console.log(result?.text)
			setScanned(true)
		}
	}

	const handleError = (error) => {
		if (!!error) {
			console.log(error)
		}
	}

	return (
		<>
			<div className={`blockScanner ${scanned ? 'hidden' : 'block'}`}>
				<Reader onScan={handleScan} onError={handleError} />
			</div>
      <div className='flex flex-col'>
      <AiFillSmile size={150} className={`blockScanner ${scanned ? 'block' : 'hidden'}`} />
      </div>
      
		</>
	)
}

export default ScannerQR
