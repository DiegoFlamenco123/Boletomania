import MenuAdmin from "../../components/AdminView/MenuAdmin";
import Navbar from "../../components/header/Navbar";
import PeopleView from "../../components/AdminView/PeopleView";
import EventsView from "../../components/AdminView/EventsView";
import ChartsView from "../../components/AdminView/ChartsView";


// Objetivo: Mostrar una grafica de barras con los datos de los tickets
const Grafica = () => {

  return (
    <div>
    <Navbar/>
    <MenuAdmin/>
    <ChartsView/>
    
    
    
    </div>
  )
}

export default Grafica