import React from 'react'
import Logo from '../../img/logo.png'
import './Auth.css'
const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>RPG Pvt-Ltd.</h1>
                <h6>Explore the ideas throught the world</h6>
            </div>
        </div>
        {/* <SignUp/> */}
        <LogIn/>
    </div>
  )
}

function LogIn(){
    return (
        <div className="a-right">
            <form action="" className="infoForm authForm">
                <h3>Login</h3>

                <div>
                <input type="text" className="infoInput" name='username' placeholder='User Name' />
                </div>
                <div>
                <input type="password" className="infoInput" placeholder='Password' name='password'/>
                </div>

                <div>
                    <span>Don't have an account Sign up</span>
                    <button className="button infoButton">Login</button>
                </div>
            </form>
        </div>
    )
}

function SignUp(){
    return (
        <div className="a-right">
            <form action="" className="infoForm authForm">

                <h3>Sign up</h3>

                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname' />

                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname' />
                </div>
                <div>
                    <input type="text" className="infoInput" name='username' placeholder='User Name' />
                </div>
                <div>
                    <input type="password" className="infoInput" placeholder='Password' name='password'/>
                    <input type="password" className="infoInput" name='confirmpass'  placeholder='Confirm Password'/>
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an account. Login!</span>
                </div>
                <button className="button infoButton" type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Auth