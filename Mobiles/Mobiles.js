import React from 'react'
import { mobileData } from '../../Mobile'
import '../../pages/Lap/Laptop.css'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext';
import {addToCart} from '../../pages/ShopCategory'
import Swal from 'sweetalert2';
import Footer from '../../pages/Footer/Footer';

function Mobiles() {

    const handleAdd = (item) =>{
      addToCart(item);
  
      Swal.fire({
        toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    icon: "success",
    title: "Added to cart"
      })
    }

      const {addToCart, cartItems} = useCart();
  
        
    
  return (
    <>
    <div className='prosec'>

      {
        mobileData.map((item) =>{
            return(
                <>
                
                <div className='image-pro col-md-4 py-3 py-md-0'>
                <Link to={`/mobile/${item.id}`}>
                    <img src={item.image} alt="" />
                </Link>
                    <div class="starrrr text-center  ">
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i> 
                 <i class="bi-solid bi-star-half"></i>
               </div>
               <h6 className='text-center fw-bold pt-3'>{item.company} {item.model}</h6>
                <p className='text-center'>{item.description}</p>

                 <p className='bb'>{item.price}  <i className='bi bi-heart-fill' title='add to cart' onClick={() => handleAdd(item)}></i>
               </p>
                <div className='view text-center'>
                                  <Link to={`/mobile/${item.id}`}>View details</Link>
                
                                 </div>
                 
                 <div>
                 </div>
                </div>
                
                
        </>

            )
        })
      }
    </div>
    <Footer/>
    </>
  )
}


export default Mobiles
