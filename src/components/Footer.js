import React from "react";
import {FaThinkPeaks, FaGripfire, FaStar, FaPlus } from 'react-icons/fa';
import RelatedSlider from "./RelatedSlider";
const Footer = () => {
    return(
        <>
        <hr />
            <div className="trend-container pt-5">
                <img src={require('../img/batman.png')} className="mx-auto w-25"/>
                <iframe src="https://www.youtube.com/embed/mqqft2x_Aa4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                <br/ ><br/ ><br/ >
                <ul className="d-flex menu-cat">
                    <li><h2><FaThinkPeaks /> Related Movies</h2></li>
                    <li><p><FaGripfire /> Popular</p></li>
                    <li><p><FaStar/> Premieres</p></li>
                    <li><p><FaPlus /> Recently Added</p></li>
                </ul>
                <hr />
                <div id="carousel-6" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <RelatedSlider />
                        
                    </div>
                    <button className="carousel-control-prev" type="button" href="#carousel-6" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" href="#carousel-6" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


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
        </>
    );
}  
    
export default Footer;