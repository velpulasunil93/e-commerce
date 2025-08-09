import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Products/Product';
import About from './pages/About/About';
import Category  from './pages/Category';
import Contact from './pages/Contact/Contact';
import ShopCategory from './pages/ShopCategory'
import{BrowserRouter, Routes,Route, Router} from 'react-router-dom';
// import Product from './pages/Product';
import Cart from './pages/Cart';
import Cards from './Componenets/Cards';
import LoginSignup from './pages/LoginSignup';
import { useState } from 'react';
import ProductsSingle from './Componenets/singles/ProductsSingle';
import Laptop from './pages/Lap/Laptop';
import Laptosingle from './Componenets/lap/Laptosingle'
import Map from './Componenets/Map/Map';
import Mobiles from './Componenets/Mobiles/Mobiles';
import MobileSingle from './pages/MobileSingle/MobileSingle'
import Fridge from './pages/Fridge/Fridge';
import FridgeSingle from './pages/FridgeSingle/FridgeSingle';
import Watch from './pages/Watch/Watch';
import SmartSingle from './Componenets/smartsingle/SmartSingle';
function App() {
  const [show, setShow] = useState();
  const [cart,setCart] = useState();
  return (
  <div>
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/card' element ={<Cards/>}/>
    <Route path='/' element = {<Home/>}/>
    <Route path='/products' element = {<Product/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path ='/contact' element ={<Contact/>}/>
      <Route path='/smartphones' element = {<Mobiles/>}/>
      {/* <Route path='/fridge' element = {<ShopCategory category = "fridge"/>}/> */}
      <Route path='/headphoes' element = {<ShopCategory category = "headphones"/>}/>
      <Route path='/laptop' element = {<Laptop/>}/>
      {/* <Route path='/product' element = {<Product/>}/> */}
      {/* <Route path=':productId' element = {<Product/>}>
      </Route> */}
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/login' element = {<LoginSignup/>}/>
      <Route path='/products/:id' element ={<ProductsSingle/>}/>
      <Route path='/lap/:id' element = {<Laptosingle/>}/>
      <Route path='/mobile/:id' element ={<MobileSingle/>}/>
      <Route path='/order' element={<Map/>}/>
      <Route path='/fridges' element ={<Fridge/>}/>
      <Route path='/fridges/:id' element ={<FridgeSingle/>}/>
      <Route path='/smartwatch' element = {<Watch/>}/>
      <Route path='/smartwatch/:id' element= {<SmartSingle/>}/>
      </Routes>
      </BrowserRouter>
  </div>
  );
}



export default App;
