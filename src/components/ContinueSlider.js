import React from "react";
import styled from 'styled-components';
import {FaHeart, FaEye, FaStar} from 'react-icons/fa';
import continueSliderContent from '../content-arr/continue-watching-content';

const Card = styled.div`
    background-color: #272727;
    margin: 15px;
    line-height: 15px;
    border-radius: 10px;
`;
const ContinueSlider = () => {
    return(
        <>
        <div className="carousel-item active">
        <div style={{display: 'flex'}} className="slider-div">
            {
                continueSliderContent.slice(0, 5).map(movie => {
                    return (
                            <>
                            <Card className="card">
                                <img src={movie.img} alt={movie.title}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                            <div className="d-flex justify-flex movie-etc">
                                                <p>{movie.year}</p>
                                                <p><FaHeart /></p>
                                                <p><FaEye /></p>
                                                <p><FaStar /> {movie.rating}</p>
                                            </div>
                                    </div>
                                
                            </Card>
                            </>
                        
                    );
                })
            }
        </div>
        </div>
        </>
    );
}  

export default ContinueSlider;