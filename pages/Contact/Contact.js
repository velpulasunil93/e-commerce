import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
import Swal from 'sweetalert2'  
import { useEffect } from 'react'
// install pip install swettalert2 for message alert or sweetalert2.com
//  for contact submision form web3forms.com and enter email get key and copy code

function Contact() {


  const handleTermsAndConditions = async () => {
    const { value: accept } = await Swal.fire({
      title: 'Terms and conditions',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: 'I agree with the terms and conditions',
      confirmButtonText: 'Continue&nbsp;<i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result &&  'You need to agree with T&C';
      }
    });

    if (accept){
      Swal.fire('You agreed with T&C :)');
    }
  };

// //   Call the function when the component mounts or based on a button click
//   useEffect(() => {
//     handleTermsAndConditions();
//   }, []);


    // for this code visit web3forms

      const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "39499394-c8f9-46f4-9f5c-3397b4f922b2");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json(10);
    
        if (data.success) {
            setResult("Sent...")
            Swal.fire({
                title :"Success",
                text:"Message sent successfully!",
                icon:"Scuccess"
            })
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div>
      <div class="container" id='con'>
        <div class="row cont">
            <div class="col-md-4 py-3 py-md-0">
                <div class="card">
                    <i class="bi bi-phone"> Phone</i>
                    <h6>+91 9300000000</h6>
                </div>
            </div>
            <div class="col-md-4 py-3 py-md-0">
                <div class="card">
                    <i class="bi bi-envelope"> Email</i>
                    <h6>example@gmail.com</h6>
                </div>
            </div>
            <div class="col-md-4 py-3 py-md-0">
                <div class="card">
                    <i class="bi bi-location"> Address</i>
                    <h6>Hyderabad, Telangana</h6>
                </div>
            </div>
        </div>
                <form onSubmit={onSubmit}>

        <div class="row for" >
            <div class="col-md-4 py-3 py-md-0">
                <input type="text" class="form-control form-control" placeholder="Name"  name='name' required />
            </div>
            <div class="col-md-4 py-3 py-md-0">
                <input type="text" class="form-control form-control" placeholder="Email" name='email' required/>
            </div>
            <div class="col-md-4 py-3 py-md-0">
                <input type="text" class="form-control form-control" name='phone' placeholder="Phone" required/>
            </div>
            <div class="form-group for" >
                <textarea name='message' class="form-control" id="" rows="5" placeholder="Message"  required></textarea>
            </div>
            <div>
            <input type='checkbox' onClick={()=>handleTermsAndConditions()}/> <p>I agree with the terms and conditions</p>
            </div>
            
            <div class="messagebtn text-center" ><button name='Continue'>Message</button></div>
        </div>
                    </form>
                    <span>{result}</span>

    </div>
    <Footer/>
    </div>
  )
}

export default Contact
