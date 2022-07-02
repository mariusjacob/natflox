import React from "react";
import {FaThinkPeaks, FaGripfire, FaStar, FaPlus } from 'react-icons/fa';
import ContinueSlider from "./ContinueSlider";
const ContinueWatching = () => {
    return(
        <>
            <div className="trend-container pt-5">
                <ul className="d-flex menu-cat">
                    <li><h2><FaThinkPeaks /> Continue Watching</h2></li>
                    <li><p><FaGripfire /> Popular</p></li>
                    <li><p><FaStar/> Premieres</p></li>
                    <li><p><FaPlus /> Recently Added</p></li>
                </ul>
                <hr />

                <div id="carousel-4" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <ContinueSlider />
                        
                    </div>
                </div>
            </div>
        </>
    );
}  
    
export default ContinueWatching;