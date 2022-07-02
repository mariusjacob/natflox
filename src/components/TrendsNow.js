import React from "react";
import {FaThinkPeaks, FaGripfire, FaStar, FaPlus } from 'react-icons/fa';
import MoviesSlider1 from "./MoviesSlider1";
const TrendsNow = () => {
    return(
        <>
            <div className="trend-container pt-5">
                <ul className="d-flex menu-cat">
                    <li><h2><FaThinkPeaks /> Trends Now</h2></li>
                    <li><p><FaGripfire /> Popular</p></li>
                    <li><p><FaStar/> Premieres</p></li>
                    <li><p><FaPlus /> Recently Added</p></li>
                </ul>
                <hr />
                <ul className="d-flex mx-4 button-cat">
                    <li><button className="btn btn-danger px-3  btn-category ">Action</button></li>
                    <li><button className="btn btn-secondary px-3 btn-category">Adventure</button></li>
                    <li><button className="btn btn-secondary px-3 btn-category">Animation</button></li>
                    <li><button className="btn btn-secondary px-3 btn-category">Biography</button></li>
                    <li><button className="btn btn-secondary px-3 btn-category">Crime</button></li>
                    <li><button className="btn btn-secondary px-3 btn-category">Comedy</button></li>
                    <li><button className="btn btn-secondary px-3 btn-category">Documentation</button></li>
                    <li><button className="btn btn-secondary px-3 btn-category">Drama</button></li>
                </ul>

                <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <MoviesSlider1 />
                        
                    </div>
                    <button className="carousel-control-prev" type="button" href="#carousel-1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" href="#carousel-1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}  
    
export default TrendsNow;