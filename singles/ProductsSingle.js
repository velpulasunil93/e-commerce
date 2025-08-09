import React from 'react'
import { computerData}  from '../../Computers';
import { Link, useParams } from 'react-router-dom'
import './ProductsSingle.css'
import { useCart } from '../Context/CartContext';
import { product_list } from '../../data';
import Swal from 'sweetalert2';

function ProductsSingle() {


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

    const{addToCart, cartItems} = useCart()

    const produ = product_list.find((item) => item.id === parseInt(id))


    console.log(id)
    console.log(product_list)
  return (
    <div>
    <div className='ind-section'>
    <div className="ind-image">
    <img src={produ?.image} alt="" />
    </div>
    <div className="ind-details space">
       <div className="ind-title">
       <h4>{produ?.brand}</h4>
      <h6>{produ?.title}</h6>
    </div>
    <div className="ind-model space">
          <p>{produ?.des}</p>

    </div>
    <div className="ind-desc space">
            <h6>{produ.price}  </h6>
            <h6 className='text-decoration-line-through text-muted'>{produ?.rate}</h6>
            <p>{produ?.off}</p>
      <div class="starr ">
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i> 
                 <i class="bi-solid bi-star-half"></i>
               </div>
    </div>
    <button onClick={()=>handleAdd(produ)} className='btnnn'>Add to cart</button>
    <Link to='/order'>Shop now</Link>
    </div>
    </div>





    </div>


  )

}

export default ProductsSingle
