import MenuAdmin from "../../components/AdminView/MenuAdmin";
import Navbar from "../../components/header/Navbar";
import ChartsView from "../../components/AdminView/ChartsView";
import Footer from "../../components/footer/Footer";


// Objetivo: Mostrar una grafica de barras con los datos de los tickets
const ChartPage = () => {

  return (
    <div>
    <Navbar/>
    <MenuAdmin/>
    <ChartsView/>
    
    </div>
  )
}

export default ChartPage