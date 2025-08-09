
import { Link, useParams } from "react-router-dom"
import { computerData } from "../../Computers"
import './Laptosingle.css'
import Swal from "sweetalert2"
import React from 'react'
import { useCart } from "../Context/CartContext";

function Laptosingle() {


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

   const {id} = useParams();

       const{addToCart, cartItems} = useCart();
   

   const element = computerData.find((item) => item.id === (id))

  return (
    <div>
    <div className="sec ">
      <div className="image-fl">
         <img src={element?.image} alt="" />
               </div>
         <div className="paraaa">
           <h3>{element?.company} {element?.model}</h3>
         <p>{element.description}</p>
         <p>{element.price}</p>
         <p className="text-decoration-line-through text-muted">{element.rate}</p>
         <p className="of">{element.off}</p>
         <div class="starr ">
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i> 
                 <i class="bi-solid bi-star-half"></i>
               </div>
         <button onClick={()=>handleAdd(element)} className="btnn">Add to Card</button>
         <Link to='/order'>Shop now</Link>
         
         </div>
         
   </div>
   </div>
)   
}

export default Laptosingle



