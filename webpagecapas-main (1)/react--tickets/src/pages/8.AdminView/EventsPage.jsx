import MenuAdmin from "../../components/AdminView/MenuAdmin";
import Navbar from "../../components/header/Navbar";
import EventsView from "../../components/AdminView/EventsView";
import Footer from "../../components/footer/Footer";


// Objetivo: Mostrar una grafica de barras con los datos de los tickets
const EventsPage = () => {

  return (
    <div>
    <Navbar/>
    <MenuAdmin/>
    <EventsView/>
    
    </div>
  )
}

export default EventsPage