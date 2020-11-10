/*eslint-disable*/
import React, { useState } from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import "./slider.scss";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{height: "88vh"}}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                      
                        <h2 className="animated slideInDown" style={{ animationDelay: "1s" }}>TEST YOUR LOGICAL THINKING</h2>
                  <h3 className="animated slideInRight" style={{ animationDelay: "2s" }}>TRY OUT CODE CHALLENGES.</h3>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "88vh"}}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1484665739383-a1069a82d4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                />

                <Carousel.Caption >
                <h2 className="animated bounceInRight" style={{ animationDelay: "1s" }}>Code Editor</h2>
                        <h3 className="animated bounceInLeft" style={{ animationDelay: "2s" }}>START WRITE YOUR CODE.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "88vh"}}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1565041262205-45564ba1a39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 className="animated zoomIn" style={{ animationDelay: "1s" }}>COLLABORATIVE DEVELOPMENT ENVIROMENT</h2>
                    <h3 className="animated zoomIn" style={{ animationDelay: "2s" }}>REAL-TIME CODE TYPING SYNCRONIZATION.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;