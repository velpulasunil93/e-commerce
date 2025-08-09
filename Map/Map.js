import React from 'react'
import '../../pages/Login.css'
import Swal from 'sweetalert2';

function Map() {



  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1fde43ce-894d-4ae2-abb6-99449b80b744");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
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
      <div class="col-md-7 py-3 py-md-0" id="side2">
            <h3 class="text-center order">Order Now</h3>
           
            <div class="input text-center">
            <form  onSubmit={onsubmit}>
            <input type="name" placeholder="Enter Your Name" name='name' required/><br />
            <input type="text" placeholder="Enter Your village/Town" name='message' required/><br />
             <input type="text" placeholder="Enter Your city" name='message' required/><br />
              <input type="phonenumber" placeholder="Pincode" name='number' required/><br />
             <input type="phonenumber" placeholder="Enter your phone number" name='number' required/><br />
            <input type="submit" id='btnlogin' />
                        {/* <div class="messagebtn text-center"><button>Message</button></div> */}

            </form>
            </div>
        </div>
    </div>
  )
}

export default Map
