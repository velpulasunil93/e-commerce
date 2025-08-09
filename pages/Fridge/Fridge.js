import React from 'react'
import { fridgeData } from '../../Fridge'
import '../Lap/Laptop.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useCart } from '../../Componenets/Context/CartContext'
import Footer from '../Footer/Footer'

function Fridge() {

  const {addToCart,cartItems} = useCart();

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
  return (
    <>
    <div className='prosec'>
    {
       fridgeData.map((item) =>{
        return(
            <div className='image-pro col-md-4 py-3 py-md-0'>
            <Link to={`/fridges/${item.id}`}>
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
                 <p className='bb'>{item.price}  <i className='bi bi-heart-fill' onClick={()=> handleAdd(item)} title='add to cart'></i></p>
                  <div className='view text-center'>
                  <Link to={`/fridges/${item.id}`}>View details</Link>

                 </div>
            </div>
        )

       })
    }
    <div>
    <div>
      
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Fridge
