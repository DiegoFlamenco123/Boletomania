import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/5.login/Login'
import SetPassword from './pages/7.SetPassword/SetPassword'
import Home from '../src/pages/1.home/Home'
import MisTickets from '../src/pages/2.mistickets/MisTickets'
import TicketPurchase from '../src/components/ticketPurchaseView/TicketPricePrincipal'
import Grafica from '../src/pages/4.grafica/Grafica'
import ChartPage from './pages/8.AdminView/ChartPage'
import EventsPage from './pages/8.AdminView/EventsPage'
import PeoplePage from './pages/8.AdminView/PeoplePage'
import ScannerQR from './pages/3.escaner/ScannerQR'
import CompraPage from './pages/9.BuyPage/CompraPage'
import Checkout from './components/comprar/Checkout'
import CreateEventPage from './pages/10.createEvent/CreateEventPage'
import Register from './pages/11.Register/Register'
import AddMemberPage from './pages/12.AddMember/AddMemberPage'
import Tier from './components/tierCreation/createTier'
import Sponsor from './components/sponsorCreation/createSponsor'
import Location from './components/locationCreation/createLocation'


function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/setPassword' element={<SetPassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/asda' element={<Home />} />
          <Route path='/misTickets' element={<MisTickets />} />
          <Route path="/ticketPurchase/:id" element={<TicketPurchase />} />
          <Route path='/grafica' element={<Grafica />} />
          <Route path='/chartsView' element={<ChartPage />} />
          <Route path='/eventsView' element={<EventsPage />} />
          <Route path='/peopleView' element={<PeoplePage />} />
          <Route path='/scannerQR' element={<ScannerQR />} />
          <Route path='/buy/:id' element={<CompraPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/createEventPage' element={<CreateEventPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/AddMemberPage' element={<AddMemberPage />} />
          <Route path='/tierCreation' element={<Tier />} />
          <Route path='/sponsorCreation' element={<Sponsor />} />
          <Route path='/locationCreation' element={<Location />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
