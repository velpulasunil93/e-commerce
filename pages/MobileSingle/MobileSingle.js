import { Link, useParams } from "react-router-dom";
import { mobileData } from "../../Mobile";
import '../../Componenets/lap/Laptosingle.css'
import Swal from 'sweetalert2'
import React from 'react'
import { useCart } from "../../Componenets/Context/CartContext";

function MobileSingle() {

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

    const {id} = useParams();

    const phone = mobileData.find((item) => item.id ===(id))
  return (
    <div>
      <div className="sec ">
      <div className="image-fl">
      <img src={phone.image} alt="" />
        </div>
        <div className="paraaa">
           <h3>{phone.company} {phone.model}</h3>
         <p>{phone.description}</p>
         <p>{phone.price}</p>
         <p className="text-decoration-line-through text-muted">{phone.rate}</p>
         <p className="of">{phone.off}</p>
         <div class="starr ">
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i> 
                 <i class="bi-solid bi-star-half"></i>
               </div>
         <button onClick={() =>handleAdd(phone)}  className="btnn">Add to Card</button>
         
         </div>
      </div>
    </div>
  )
}

export default MobileSingle
