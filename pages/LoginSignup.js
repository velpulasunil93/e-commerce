import React from 'react'
import './Login.css'

function LoginSignup() {


  return (
    <div>
      <div class="container" id="login">
    <div class="row">
        <div class="col-md-5 py-3 py-md-0" id="side1">
            <h3 class="text-center">Welcome Back!</h3>
        </div>
        <div class="col-md-7 py-3 py-md-0" id="side2">
            <h3 class="text-center"> Login</h3>
           
            <div class="input2 text-center">
            <form action="">
            <input type="name" placeholder="User Name" required/>
            <input type="password" placeholder="Password" required/>
            <input type="submit" id='btnlogin' />
            </form>
            </div>
            <p class="text-center">Forgot Password<a href="#">Click</a></p>
        </div>

    </div>
   </div>
    </div>
  )
}

export default LoginSignup
