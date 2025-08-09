import React from 'react'
import { watchData } from '../../Watches'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useCart } from '../Context/CartContext';

function SmartSingle() {

    const {addToCart, cartItems} = useCart();

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
          };

    const {id} = useParams();
    const smart = watchData.find((item) => item.id === id)
  return (
    <div>
     <div className="sec ">
      <div className="image-fl">
         <img src={smart.image} alt="" />
               </div>
         <div className="paraaa">
           <h3>{smart.company} {smart.model}</h3>
         <p>{smart.description}</p>
         <p>{smart.price}</p>
         <p className="text-decoration-line-through text-muted">{smart.rate}</p>
         <p className="of">{smart.off}</p>
         <div class="starr ">
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i> 
                 <i class="bi-solid bi-star-half"></i>
               </div>
         <button onClick={()=>handleAdd(smart)} className="btnn">Add to Card</button>
         <Link to='/order'>Shop now</Link>
         
         </div>
         
   </div>
    </div>
  )
}

export default SmartSingle
