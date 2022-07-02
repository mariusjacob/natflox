import React from "react";
import { FaChevronDown, FaSearch, FaBell, FaRegUserCircle, FaPlay, FaPlus, FaStar, FaBars } from 'react-icons/fa';


import ContinueWatching from "../components/ContinueWatching";
import TrendsNow from "../components/TrendsNow";
import NewRelease from "../components/NewRelease";
import Footer from "../components/Footer";

const Homepage = () => {
    return(
        <>
            <nav>
            <div className="homepage-navbar">
                <img src={require('../img/logo-img.png')} />
                <ul className="navbar-ul d-flex">
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>My List <FaChevronDown /> </li>
                    <li><FaSearch/></li>
                    <li><FaBell/></li>
                    <li><FaRegUserCircle/></li>
                    <li style={{display: 'none'}} className="menu-bar"><FaBars/></li>
                </ul>
            </div>
            </nav>

            <br />
            <div className="landing-hero">
                <div className="position-absolute">
                    <div>
                        <p>Duration: 2h 49m</p>
                        <p><FaStar /> 6.5 Action | Adventure | Sci-Fi</p>
                        <h1>Interstellar</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse unde id inventore doloremque facere aperiam, natus saepe ipsam. Nam vel dolores commodi modi doloremque, quia labore accusamus aliquam incidunt dignissimos eligendi officiis necessitatibus beatae quaerat repudiandae alias.</p>
                        <button className="btn btn-danger px-3"><FaPlay /> WATCH</button>&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-secondary px-3"><FaPlus /> ADD LIST</button>
                    </div>
                </div>
                <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item hero-car active">
                            <img src={require('../img/interstellar/1.jpg')} />
                        </div>
                        <div className="carousel-item hero-car">
                            <img src={require('../img/interstellar/2.jpg')} />
                        </div>
                        <div className="carousel-item hero-car">
                            <img src={require('../img/interstellar/3.jpg')} />
                        </div>
                        <div className="carousel-item hero-car">
                            <img src={require('../img/interstellar/4.jpg')} />
                        </div>
                        <div className="carousel-item hero-car">
                            <img src={require('../img/interstellar/5.jpg')} />
                        </div>
                        <div className="carousel-item hero-car">
                            <img src={require('../img/interstellar/interstellar.gif')} />
                        </div>
                    </div>
                </div>
                
            </div>
            {/* ContinueWatching */}
            <ContinueWatching />
            {/* TrendsNow */}
            <TrendsNow />
            {/* newRelease */}
            <NewRelease />
            {/* etc */}
            <Footer />
        </>
    );
}  
    
export default Homepage;