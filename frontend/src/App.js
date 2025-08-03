import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Popular from './Components/Popular/Popular';
import NewArrivals from './Components/NewArrivals/NewArrivals';
import Footer from './Components/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder';
import Orders from './Pages/Orders';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/journals-planners' element={<ShopCategory category="journals-planners"/>}/>
      <Route path='/washi-tapes' element={<ShopCategory category="washi-tapes"/>}/>
      <Route path='/art-supplies' element={<ShopCategory category="art-supplies"/>}/>
      <Route path='/best-sellers' element={<ShopCategory category="best-sellers"/>}/>
      <Route path='/stationery' element={<ShopCategory category="stationery"/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/new-arrivals' element={<NewArrivals/>}/>

      <Route path="/product/:id" element={<Product />} />

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;


