import data from '../../data';
import React from 'react'
import Cart from '../Cart'
import Cards from '../../Componenets/Cards'
import { product_list } from '../../data';
import './Product.css'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../pages/Lap/Laptop.css'
import { useCart } from '../../Componenets/Context/CartContext';
import Navbar from '../../Componenets/Navbar/Navbar';

function Product() {

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
    }

  return (
    <>
    <h1 className='text-center mt-5 '>ALL PRODUCTS</h1>
 <div className='prosec'>
    {
        product_list.map((item)=>{
          return(
            <>
             <div className='image-pro col-md-4 py-3 py-md-0'>
             <Link to={`/products/${item.id}`}>
             <img src={item.image} alt="" />
              </Link>
              <div class="starrrr text-center  ">
                 <i class="bi bi-star-fill"></i>
                 <i class="bi bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i>
                 <i class="bi-solid bi-star-fill"></i> 
                 <i class="bi-solid bi-star-half"></i>
               </div>
               <h6 className='text-center fw-bold pt-3'>{item.title} {item.model}</h6>
                <p className='text-center'>{item.des}</p>
                <p className='bb'>{item.price}  <i className='bi bi-heart-fill' title='add to cart' onClick={() => handleAdd(item)}></i></p>
                 <div className='view text-center'>
                 <Link to={`/products/${item.id}`}>View details</Link>
                 </div>
                 </div>
          
</>
          )}

        )

  
}

</div>
<Footer/>

</>

  )
}
export default Product























// import React from 'react'
// import './Product.css'
// import p6 from '../../Componenets/Assests/p6.png'
// import a1 from '../../Componenets/Assests/a1.png'
// import laptop2 from '../../Componenets/Assests/laptop2.png'
// import t1 from '../../Componenets/Assests/t1.png'
// import w1 from '../../Componenets/Assests/w1.png'
// import pcm1 from '../../Componenets/Assests/pcm1.png'
// import phone1 from '../../Componenets/Assests/phone1.png'
// import pr1 from '../../Componenets/Assests/pr1.png'
// import pr2 from '../../Componenets/Assests/pr2.png'
// import pr3 from '../../Componenets/Assests/pr3.png'
// import pr4 from '../../Componenets/Assests/pr4.png'
// import pr7 from '../../Componenets/Assests/pr7.png'
// import pr10 from '../../Componenets/Assests/pr10.png'
// import pr11 from '../../Componenets/Assests/pr11.png'
// import pr12 from '../../Componenets/Assests/pr12.png'
// import h1 from '../../Componenets/Assests/h1.png'
// import { Link } from 'react-router-dom'
// import Footer from '../Footer/Footer'
// import products_list from '../../data'
// function Product() {

//   return (
//     <div>
//         <div class="container" id="product-cards">
//       <h1 class="text-center">PRODUCTS</h1>
//       <div class="row" >
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={p6} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Iphone 13 pro</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center ">
//                 <i class="bi bi-star-fill"></i>
//                 <i class="bi bi-star-fill"></i>
//                 <i class="bi-solid bi-star-fill"></i>
//                 <i class="bi-solid bi-star-fill"></i> 
//                 <i class="bi-solid bi-star-fill"></i>
//               </div>
//               <h2>$1000<span><i className='bi bi-cart-fill'  title='Addto Cart'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//         <div class="card">
//             <img src={a1}alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Airpods</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-half checked"></i>
//               </div>
//               <h2>$100 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={laptop2} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Laptop</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$200 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={t1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Ipad</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$300 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="row" >
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={w1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Smart Watch</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//               </div>
//               <h2>$50.60 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pcm1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">PC Moniter</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$600 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={phone1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">iPhone x</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$500 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={h1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Headphone</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>

//               </div>
//               <h2>$60 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//       </div>





//        <div class="row" >
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={w1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Smart Watch</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//               </div>
//               <h2>$50.60 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pcm1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">PC Moniter</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$600 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={phone1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">iPhone x</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$500 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={h1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Headphone</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-half checked"></i>
//               </div>
//               <h2>$60 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//       </div>
//        <div class="row" >
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pr1} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Washion Machine</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//               </div>
//               <h2>$50.60 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pr2} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Cooler</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$600 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pr3} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Microwave Oven</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$500 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pr4} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Fridge</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                  <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-half checked"></i>
//               </div>
//               <h2>$60 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pr7} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Gaming PC</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//                                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$500.60 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pr10} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Power Bank</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$100.50 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pr11} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Gaming Mouse</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star checked"></i>
//               </div>
//               <h2>$30 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//         <div class="col-md-3 py-3 py-md-0">
//           <div class="card">
//             <img src={pr12} alt=""/>
//             <div class="card-body">
//               <h3 class="text-center">Joysticks</h3>
//               <p class="text-center">Lorem ipsum dolor sit amet.</p>
//               <div class="star text-center">
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//                 <i class="bi-solid bi-star-fill checked"></i>
//               </div>
//               <h2>$150 <span><i className='bi bi-cart-fill'></i></span></h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer/>

    
//             </div>

    
//   )
// }

// export default Product
