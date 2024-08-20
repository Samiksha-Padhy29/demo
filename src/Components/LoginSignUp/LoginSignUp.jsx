import React from 'react'
import './LoginSignUp.css'
import user_icon from './Asset/user.png'
import email_icon from './Asset/email.png'
import password_icon from './Asset/password.png'
const LoginSignUp = () => {
  return (
    <div classname = 'container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <din className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>
        </din>
        <div className="submitbutton">
            <div className="submit">SignUp</div>
            <div className="submit">LogIn</div>
        </div>
      
    </div>
  )
}

export default LoginSignUp
