import Navbar from "../../components/header/Navbar";
import BuyView from "../../components/comprar/BuyView"
import TickerPurchasePrincipal from "../../components/ticketPurchaseView/TicketPricePrincipal";



// Objetivo: Mostrar una grafica de barras con los datos de los tickets
const CompraPage = () => {

  return (
    <div> 
    <TickerPurchasePrincipal/>
    <BuyView/>
    </div>
  )
}

export default CompraPage