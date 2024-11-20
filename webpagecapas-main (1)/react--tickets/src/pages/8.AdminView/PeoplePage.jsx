import MenuAdmin from "../../components/AdminView/MenuAdmin";
import Navbar from "../../components/header/Navbar";
import PeopleView from "../../components/AdminView/PeopleView";
import Footer from "../../components/footer/Footer";


// Objetivo: Mostrar una grafica de barras con los datos de los tickets
const PeoplePage = () => {

  return (
    <div>
    <Navbar/>
    <MenuAdmin/>
    <PeopleView/>
    
    </div>
    
  )
}

export default PeoplePage