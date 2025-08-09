import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/register.png'
import sunil from '../Assests/menu.png'
import { useCart } from '../Context/CartContext'
import { Link, useNavigate,  } from 'react-router-dom';

function Navbar(){ 

  const {cartItems} = useCart()

    const [menuu, setMenu] = useState("category");
    const navigate = useNavigate();
  return (
    <div>
        <div class="top-navbar">
         <p>WELCOME TO OUR SHOP</p>
         <div class="icons">
             <Link to = '/login'><img src={logo} alt="" width="18px"/>Login</Link>
             <a href="register.html"><img src={logo} alt="" width="18px"/>Register</a>
         </div>
     </div>
    <nav class="navbar navbar-expand-lg" id="navbar">
         <div class="container-fluid n">
         <Link to = '/' id='logo'  className='navbar-brand'><span id="span1">E</span>Lectronic <span>Shop</span></Link>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span><img src={sunil} alt="" width="30px"/></span>
           </button>
           <div class="collapse navbar-collapse  icon" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               
               <li><Link to = '/' className='nav-item'>Home</Link></li>
                              <li><Link to= '/about' className='nav-item' >About</Link></li>

               <li><Link to ='/products' className='nav-item'>Products</Link></li>
             
               <li class="nav-item dropdown">
                 <Link to=''  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category<i className='bi bi-caret-down-fill'></i></Link>
                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <li onClick={() => {setMenu("smartphones")}}><Link to = '/smartphones'>Smart Phone</Link> {menuu ==="smartphones"?<h/>:<></>}</li>
                   <li onClick={() => {setMenu("fridges")}}><Link to = '/fridges'>Fridge</Link> {menuu ==="fridges"?<h/>:<></>}</li>
                   <li onClick={() => {setMenu("smartwatch")}}><Link to ='/smartwatch'>Smart Watch</Link> {menuu ==="smartwatch"?<h/>:<></>}</li>
                   {/* <li onClick={() => {setMenu("headphones")}}><Link to = '/headphones'>Headphone</Link> {menuu ==="headphones"?<h/>:<></>}</li> */}
                   <li onClick={() => {setMenu("laptop")}}><Link to='/laptop'>Laptop</Link> {menuu ==="laptop"?<h/>:<></>}</li>
                 </ul>
               </li>
              
            
               <li><Link to = '/contact' className='nav-item'>Contact</Link></li>
             </ul>
             <Link to = '/cart' className='car'><i className='bi bi-cart-fill'></i></Link>
             <span>
              {cartItems.length}
             </span>
           </div>
         </div>
       </nav>
      
    

    </div>
  )
}

export default Navbar










// <div class="top-navbar">
//         <p>WELCOME TO OUR SHOP</p>
//         <div class="icons">
//             <a href="login.html"><img src={logo} alt="" width="18px"/>Login</a>
//             <a href="register.html"><img src={logo} alt="" width="18px"/>Register</a>
//         </div>
//     </div>

//     <nav class="navbar navbar-expand-lg" id="navbar">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="index.html" id="logo"><span id="span1">E</span>Lectronic <span>Shop</span></a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span><img src={menu} alt="" width="30px"/></span>
//           </button>
//           <div class="collapse navbar-collapse  icon" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="index.html">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="product.html">Product</a>
//               </li>
//               <li class="nav-item dropdown" onClick={() => {setMenu("category")}}>
//                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Category{menu = "category"}
//                 </a>
//                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><a class="dropdown-item" href="#">Smart Phone</a></li>
//                   <li><a class="dropdown-item" href="#">Fridge</a></li>
//                   <li><a class="dropdown-item" href="#">AC</a></li>
//                   <li><a class="dropdown-item" href="#">Smart Watch</a></li>
//                   <li><a class="dropdown-item" href="#">Headphone</a></li>
//                   <li><a class="dropdown-item" href="#">Laptop</a></li>
//                 </ul>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="about.html">About</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="contact.html">Contact</a>
//               </li>
//             </ul>
//             <a href="">Cart<i className='bi bi-cart-fill'></i></a>
//           </div>
//         </div>
//       </nav>