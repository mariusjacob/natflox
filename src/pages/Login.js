import React from "react";
import { FaFacebook } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <div className="login-container">
            <div className="login-navbar">
                <img src={require('../img/logo-img.png')} />
            </div>
            <div className="login-div">
                <form className="login-form text-start">
                    <h1>Sign In</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to="/homepage"><button type="submit" className="btn btn-danger w-100">Sign in</button></Link>
                    
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label float-start" htmlFor="remember">Remember Me</label>
                        <label className="form-check-label float-end">Need help?</label>
                    </div>
                    <br/>
                    <div className="mb-3 d-flex">
                        <p><FaFacebook /></p>
                        <p className="px-2"> Login with Facebook</p>
                    </div>
                    <div className="mb-3">
                        <small>New to Netflix? <a>Sign up now</a><br /></small>
                        <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more</a></small>
                    </div>
                </form>
            </div>
            <br/><br/><br/><br/>

            <div className="login-footer p-5">
                <p>Questions? Contact Us</p>
                <ul class="d-flex">
                    <li>FAQ</li>
                    <li>Help Center</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                </ul>

                <ul class="d-flex">
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                </ul>
                <p style={{"textAlign": "center"}}>Coded by: Marius Jacob Hernandez</p>
            </div>
        </div>
    );
}  
    
export default Login;