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
                <img style={{height: "85vh"}}
                    className="d-block w-100"
                    src="https://www.infiniticreation.co.uk/wp-content/uploads/2014/03/home_sec.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                        <h2 className="animated bounceInRight" style={{ animationDelay: "1s" }}>Code Editor</h2>
                        <h3 className="animated bounceInLeft" style={{ animationDelay: "2s" }}>START WRITE YOUR CODE.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "85vh"}}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1484665739383-a1069a82d4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                />

                <Carousel.Caption >
                  <h2 className="animated slideInDown" style={{ animationDelay: "1s" }}>TEST YOUR LOGICAL THINKING</h2>
                  <h3 className="animated slideInRight" style={{ animationDelay: "2s" }}>TRY OUT CODE CHALLENGES.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "85vh"}}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 className="animated zoomIn" style={{ animationDelay: "1s" }}>COLLABORATICE DEVELOPMENT ENVIROMENT</h2>
                    <h3 className="animated zoomIn" style={{ animationDelay: "2s" }}>REAL-TIME CODE TYPING SYNCRONIZATION.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;