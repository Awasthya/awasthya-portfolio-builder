import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import signin from '../images/signin-image.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyIcon from '@mui/icons-material/Key';
const Login = () => {
    const History = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let value;
    
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("/login", {
            method: "POST",
            headers : {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                 email,
                password
            })
            
        });
        
        const data = await res.json();
        console.log('hel');
        if (data.status === 422 || !data ) {
            window.alert("Invalid Registartion");    
        } else {
            window.alert("login successful");
            History.push('/signin');
        }
    }
  return (
    <div>
    <>
    <div className="main">
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={signin} alt="sing up image" /></figure>
                    <NavLink to="/signup">Create an account</NavLink>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><PersonIcon/></label>
                                          <input type="text" name="email" id="your_name" value={email.email} onChange = {(e) => setEmail(e.target.value)} placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><KeyIcon/></label>
                                <input type="password" name="password"  value={email.password} onChange={(e) => setPassword(e.target.value)} id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                             <input type="submit" name="signin" onClick={loginUser} id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><FacebookIcon/></a></li>
                                <li><a href="#"><EmailIcon></EmailIcon></a></li>
                                <li><a href="#"><TwitterIcon/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    </>
   
    </div>
  )
}

export default Login
