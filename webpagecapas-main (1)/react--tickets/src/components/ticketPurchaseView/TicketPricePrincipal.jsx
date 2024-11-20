import React from "react";
import TicketPurchaseView from "./TicketPurchaseView";
import TicketPriceComponent from "./TicketPriceComponent";
import Navbar from "../../components/header/Navbar";

const TickerPurchasePrincipal = () => {
    return(
        <div>
        <Navbar/>
        <TicketPurchaseView/>
        <TicketPriceComponent/>
        </div>
    )
}

export default TickerPurchasePrincipal;