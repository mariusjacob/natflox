import React from "react";
import styled from 'styled-components';
import {FaHeart, FaEye, FaStar} from 'react-icons/fa';
import moviescontent from '../content-arr/movies-content';
const Card = styled.div`
    background-color: #272727;
    margin: 15px;
    line-height: 15px;
    border-radius: 10px;
`;
const MoviesSlider1 = () => {
    return(
        <>
        <div className="carousel-item active">
        <div style={{display: 'flex'}} className="slider-div">
            {
                moviescontent.slice(0, 5).map(movie => {
                    return (
                        
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
                        
                    );
                })
            }
        </div>
        </div>

        <div className="carousel-item">
        <div style={{display: 'flex'}} className="slider-div">
            {
                moviescontent.slice(5,10).map(movie => {
                    return (
                        
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
                        
                    );
                })
            }
        </div>
        </div>


        <div className="carousel-item">
        <div style={{display: 'flex'}} className="slider-div">
            {
                moviescontent.slice(10, 15).map(movie => {
                    return (
                        
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
                        
                    );
                })
            }
        </div>
        </div>
        </>
    );
}  

export default MoviesSlider1;