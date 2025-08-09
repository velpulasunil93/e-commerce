import React from 'react'
import './Home.css'
import back from '../../Componenets/Assests/background.png'
import c3 from '../../Componenets/Assests/c3.png'
import c4 from '../../Componenets/Assests/c4.png'
import c5 from '../../Componenets/Assests/c5.png'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <section class="home">
    <div class="content">
      <h1> <span>Electronic Products</span>
        <br/>
        Up To <span id="span2">50%</span> Off
      </h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
        <br/>Lorem ipsum dolor sit amet consectetur.
      </p>
      <div class="btn"><Link to = '/products'>Shop Now</Link></div>

    </div>
    <div class="img">
      <img src={back} alt=""/>
    </div>


    
  </section>


  <div class="container" id="other">
      <div class="row">
        <div class="col-md-4 py-3 py-md-0">
          <div class="card">
            <img src={c3} alt=""/>
            <div class="card-img-overlay">
              <h3>Home Gadget</h3>
              <p>Latest collection Up To 50% Off</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 py-3 py-md-0">
          <div class="card">
            <img src={c4} alt=""/>
            <div class="card-img-overlay">
              <h3>Gaming Gadget</h3>
              <p>Latest collection Up To 50% Off</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 py-3 py-md-0">
          <div class="card">
            <img src={c5} alt=""/>
            <div class="card-img-overlay">
              <h3>Electronic Gadget</h3>
              <p>Latest collection Up To 50% Off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
    </div>
  )
}

export default Home
