import React, { createContext, useState } from 'react'
import { useCart } from '../Componenets/Context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
function Cart() {

    

const {cartItems,  addToCart,removeFromCart} = useCart()

  return (
    <div>


    <div className="your">
      {cartItems.length === 0 && <p className='text-center mt-4 fs-1 fw-bold'>Your cart is empty</p>
}
    </div>
      {cartItems.map((item) =>{
        return(
          <div className="cart-section">
            <div className="cart-img">
              <img src={item.image} alt="" />
            </div>
            <div className="cart-details space">
              <h3>{item.title} {item.company} {item.model}</h3>
              <p>{item.des}</p>
              <p>{item.description}</p>
              <h5>{item.price}</h5>

                          <h6 className='text-decoration-line-through text-muted'>{item.rate}</h6>

              <p className='para'>{item.off}</p>


              <div class="starr">
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i> 
                 <i class="bi-solid bi-star-half"></i>
               </div>
               <div className= ' remove'>
               <div className=' re'>
                <button onClick={()=>removeFromCart(item)}>Remove</button>
             </div>
             <div className= ' orders'>
              <Link to='/order'>Order Now</Link>
             </div>
             </div>
                          

            </div>

          </div>

        )
      })}
      
    </div>
  )


      
    
}

export default Cart
