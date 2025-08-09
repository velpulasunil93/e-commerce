import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    
  return (
    <div>
    <footer id="footer">
    <div className='footer-top'>
    <div className='container'>
    <div className='row'>
    <div className='col-lg-3 col-md-6 footer-contact'>
  
                <h3>Electronic Shop</h3>
                 <p>
                Hyderabad <br/>
                Telangana <br/>
                India <br/>
              </p>
              <strong>Phone:</strong> +91 0000000000 <br/>
              <strong>Email:</strong> electronicshop@.com <br></br>

    </div>

    <div class="col-lg-3 col-md-6 footer-links">
              <h4>Usefull Links</h4>
             <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policey</a></li>
             </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>

             <ul>
              <li><a href="#">PS 5</a></li>
              <li><a href="#">Computer</a></li>
              <li><a href="#">Gaming Laptop</a></li>
              <li><a href="#">Mobile Phone</a></li>
              <li><a href="#">Gaming Gadget</a></li>
             </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam.</p>

              <div class="socail-links mt-3">
                <Link to='https://x.com/VelpulaSun4928' ><i class="bi bi-twitter"></i></Link>
                <Link to='https://www.facebook.com/sunilkumar.velpula.56'><i class="bi bi-facebook"></i></Link>
                <Link to='https://www.instagram.com/velpula_sunil934/ _blank '><i class="bi bi-instagram"></i></Link>
                <Link><i class="bi bi-linkedin"></i></Link>
              </div>
            
            </div>

    </div>

    </div>

    </div>
    <div class="container py-4">
        <div class="copyright">
          &copy; Copyright <strong><span>Electronic Shop</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="#">SUNIL</a>
        </div>
      </div>

    </footer>


    </div>
  )
}

export default Footer
