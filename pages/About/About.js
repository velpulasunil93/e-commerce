import React, { useRef, useState } from 'react'
import './About.css'
import about_img from '../../Componenets/Assests/background.png'
import agent from '../../Componenets/Assests/agent-3.webp'
import agent1 from '../../Componenets/Assests/agent-6.webp'
import Footer from '../Footer/Footer'
import emailjs from '@emailjs/browser'
function About() {



  const [showmore, setShowMore] = useState(false);

  const handleMore = () =>{
    setShowMore(!showmore);
  };
 
  // pip install emailjs/browser
  // emailjs--> create template id and service id publickey

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dxxpw4s',   // e.g., service_123abc
      'template_golm80k',  // e.g., template_xyz123
      form.current,
      'G66Hw8Y6wqRHaOAZY'    // e.g., abcDEF123XYZ -------> publickey
    ).then(
      () => {
        alert("Subscribed Successfully!");
      },
      (error) => {
        alert("Something went wrong: " + error.text);
      }
    );
  };


  
       
  return (
    <div>

   <div class="container" id="about">
        <h3>About</h3>
        <hr/><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam odit quae modi cumque, dolorum id quaerat repudiandae tenetur facere veritatis inventore nam sequi. Id ipsam, odio rerum doloremque quam natus perferendis saepe est sapiente optio, ab dolore quaerat temporibus quia non, neque mollitia earum? Ab soluta magnam officiis quasi deleniti, tempora in ex vitae praesentium quaerat facere saepe laudantium temporibus nesciunt recusandae voluptas totam, iste nihil amet et. Fugiat iste eaque provident at omnis. Non asperiores rem fuga id vel ipsum libero corporis? Voluptatem, ullam omnis. Assumenda ipsa sunt sit quidem eligendi reiciendis, deleniti voluptatibus, molestias vel, ab ea quam?</p>
        <hr/>
        <div class="row">
            <div class="col-md-5 py-3 py-md-0">
                <div class="card">
                    <img src={about_img} alt=""/>
                </div>
            </div>
            <div class="col-md-7 py-3 py-md-0">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugit ad impedit libero quis. Ipsam totam accusantium non minima excepturi nemo doloremque, inventore dolores at aperiam voluptates voluptatem maiores odit. Unde dolorum similique facilis veritatis exercitationem excepturi sunt, non at quis deleniti! Mollitia quaerat temporibus reprehenderit neque esse unde minima sed illo, perferendis quidem eum voluptatem ipsam aliquam modi doloremque error. Odit amet veniam necessitatibus quis ad voluptate quidem laudantium, quia vitae quisquam dolorem deleniti temporibus reiciendis, rerum delectus quo cupiditate velit consequuntur neque eum est vero? Perspiciatis architecto provident illo sequi reprehenderit quasi excepturi hic sint perferendis, tempore cupiditate.</p>
                
                {showmore && (
                  <span>&nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, aspernatur officia. Expedita explicabo, ipsam doloremque sint architecto perferendis blanditiis veniam quibusdam vel! At, iure. Debitis aspernatur est cum porro excepturi.</span>
                )
                }
                <button onClick={handleMore}>Read More...</button>
            </div>
        </div>
    </div>

    <div class="container" id="offer">
      <div class="row">
        <div class="col-md-3 py-3 py-md-0">
          <i class="bi bi-cart-fill"></i>
          <h3>Free Shipping</h3>
          <p>On order over $1000</p>
        </div>
        <div class="col-md-3 py-3 py-md-0">
          <i class="bi bi-arrow-counterclockwise"></i>
          <h3>Free Returns</h3>
          <p>Within 30 days</p>
        </div>
        <div class="col-md-3 py-3 py-md-0">
          <i class="bi bi-truck"></i>
          <h3>Fast Delivery</h3>
          <p>World Wide</p>
        </div>
        <div class="col-md-3 py-3 py-md-0">
          <i class="bi-solid bi-hand-thumbs-up"></i>
          <h3>Big choice</h3>
          <p>Of products</p>
        </div>
      </div>
    </div>


<section id="about" class="about section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

   <div class="row justify-content-center">
          <div class="col-lg-10">

            <div class="hero-content text-center" data-aos="zoom-in" data-aos-delay="200">
              <h2>Our Testmonials</h2>
              <p class="hero-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam ut aliquam lorem dapibus gravida. Sed efficitur mauris vel magna consectetur tempor.</p>
            </div>

            <div class="dual-image-layout" data-aos="fade-up" data-aos-delay="300">
              <div class="row g-4 align-items-center">
                <div class="col-lg-6">
                  <div class="primary-image-wrap">
                    <img src={agent1} alt="Luxury Property" class="img-fluid"/>

                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis est ipsam doloribus, hic corrupti, exercitationem, repellat natus magni laboriosam quisquam reprehenderit harum ratione dolores eius. Exercitationem quisquam quibusdam rerum.</p>

                </div>

                <div class="col-lg-6">
                  <div class="secondary-image-wrap">
                    <img src={agent} alt="Professional Agent" class="img-fluid"/>
                  </div>
                  <div className='description'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nostrum dolor iure dolores molestias maxime explicabo sed aut officia recusandae possimus eveniet maiores expedita perferendis, culpa voluptates officiis quo omnis.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        </div>
        </section>


        <div class="container" id="newslater">
      <h3 class="text-center">Subscribe To The Electronic Shop For Latest upload.</h3>
      <form  ref={form} onSubmit={sendEmail}>
      <div class="input text-center">
        <input type="email" placeholder="Enter Your Email.." name="user_name" required/>
        {/* <button id="subscribe">SUBSCRIBE</button> */}
        <button id='subscribe'type='submit'>Subscribe</button>
      </div>
      </form>
    </div>



    <Footer/>



    </div>
  )
}

export default About
