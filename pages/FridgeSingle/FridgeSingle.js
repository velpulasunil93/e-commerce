import React from 'react'
import { fridgeData } from '../../Fridge'
import { useParams } from 'react-router-dom'
import '../../Componenets/lap/Laptosingle.css'
import { useCart } from '../../Componenets/Context/CartContext'
import Swal from 'sweetalert2'

function FridgeSingle() {


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

    const {addToCart, cartItems} = useCart();

    const {id} = useParams();
    const fridge = fridgeData.find((item) => item.id ===(id))
  return (
    <div>
    <div className="sec ">
      <div className="image-fl">
      <img src={fridge.image} alt="" />
        </div>
         <div className="paraaa">
           <h3>{fridge.company} {fridge.model}</h3>
         <p>{fridge.description}</p>
         <p>{fridge.price}</p>
         <p className="text-decoration-line-through text-muted">{fridge.rate}</p>
         <p className="of">{fridge.off}</p>
         <div class="starr ">
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i> 
                 <i class="bi-solid bi-star-half"></i>
               </div>
         <button onClick={()=> handleAdd(fridge)}   className="btnn">Add to Card</button>
         
         </div>
      </div>
      
    </div>
  )
}

export default FridgeSingle
