import "../css/SignUp.css"
import React from 'react' 
import { Link } from "react-router-dom";
// import Login from "./Login";

const SignUp = () => {
  return(
    <div className="maindiv">
      <h1 className="font">SIGN UP</h1>
      <form>
        <div className="inputdiv">
          <label>USERNAME :</label>
          <input type="text" name="username" placeholder="Enter Username" />

          <label>EMAILID :</label>
          <input type="email" name="email" placeholder="Enter Emailid" />

          <label>PASSWORD :</label>
          <input type="password" name="password" placeholder="Enter Password" />

          <label>CONFIRM PASSWORD :</label>
          <input type="password" name="confirmPassword" placeholder="Enter Password Again" />
          <br /> 
          <button type="submit">SignUp</button>
        </div>
      </form>
      <div className="logindiv">
        <p>Already a Account Holder??</p>
        <Link to="/login">Login</Link>
      </div>
      
    </div>
  )
}

export default SignUp
