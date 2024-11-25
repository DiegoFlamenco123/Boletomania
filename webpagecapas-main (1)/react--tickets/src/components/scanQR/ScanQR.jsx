import React, { useState } from "react";
import Reader from "react-qr-scanner";
import "../../css/GeneradorQR.css";
import { AiFillSmile, AiFillWarning } from "react-icons/ai";
import axios from "axios";

function ScannerQR() {
  const [scanned, setScanned] = useState(false); // Para mostrar el mensaje de validación
  const [scanning, setScanning] = useState(true); // Control para escanear una sola vez
  const [message, setMessage] = useState(""); // Mensaje de backend
  const [status, setStatus] = useState(""); // Estado de validación ("success", "error", etc.)
  const [scannedOnce, setScannedOnce] = useState(false); // Estado para evitar múltiples escaneos

  const handleScan = async (result) => {
    // Si el resultado existe y no se ha escaneado antes
    if (!!result && !scannedOnce) {
      const ticketId = result?.text;
      console.log("Scanned ID:", ticketId);

      // Desactivar el escáner tras el primer escaneo
      setScannedOnce(true);
      setScanning(false);

      // Obtener token de autenticación desde el localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("No authentication token found. Please log in.");
        setStatus("error");
        setScanned(true); // Mostrar mensaje de error
        return;
      }

      try {
        // Solicitud PATCH al backend
        const response = await axios({
          method: "patch",
          url: `http://localhost:8080/ticket/${ticketId}`,
          headers: {
            Authorization: `Bearer ${token}`, // Token de autorización
            "Content-Type": "application/json",
          },
        });

        // Mostrar mensaje de éxito
        setScanned(true);
        setMessage(response.data.message); // Mensaje del backend
        setStatus("success"); // Estado visual
      } catch (error) {
        setMessage("An unexpected error occurred.");
        setStatus("error");
        console.error("Error validating ticket:", error);

        if (error.response) {
          const status = error.response.status;
          const message = error.response.data?.message || error.response.statusText;

          // Manejar diferentes respuestas del backend
          if (status === 401) {
            setMessage("Unauthorized. Please log in again.");
            setStatus("error");
          } else if (status === 409) {
            // Aquí manejamos el caso cuando el ticket ya ha sido validado
            setMessage("This ticket has already been validated.");
            setStatus("error"); // Estado visual de error
          } else if (status === 400) {
            setMessage("The user doesn't exist.");
            setStatus("error");
          } else {
            setMessage(message); // Mensaje específico del error
          }
        } else {
          setMessage("Error connecting to the server");
          setStatus("error");
        }
        setScanned(true); // Mostrar mensaje de error o validación
      }
    }
  };

  const handleError = (error) => {
    if (!!error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Lector QR */}
      <div className={`blockScanner ${scanned ? "hidden" : "block"}`}>
        <Reader onScan={handleScan} onError={handleError} />
      </div>

      {/* Mensaje de validación */}
      <div className={`message-container flex flex-col ${scanned ? "block" : "hidden"}`}>
        {status === "success" ? (
          <>
            <AiFillSmile size={150} className="text-green-500" />
            <p className="text-lg font-bold text-green-500">{message}</p>
          </>
        ) : status === "error" && message === "This ticket has already been validated." ? (
          <div className="flex justify-center items-center">
            <AiFillWarning size={150} className="text-red-500" />
            <p className="text-lg font-bold text-red-500 ml-4">{message}</p>
          </div>
        ) : (
          <>
            <AiFillWarning size={150} className="text-red-500" />
            <p className="text-lg font-bold text-red-500">{message}</p>
          </>
        )}

        {/* Botón para escanear otro código */}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setScanned(false); // Permitir escanear de nuevo
            setMessage(""); // Reiniciar mensaje
            setStatus("");
            setScannedOnce(false); // Rehabilitar escaneo
            setScanning(true); // Volver a habilitar escaneo
            setTimeout(() => {
              window.location.reload(); // Refrescar la página después de 1 segundo
          },);
          }}
        >
          Scan Another Code
        </button>
      </div>
    </>
  );
}

export default ScannerQR;
