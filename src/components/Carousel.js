import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel className='container'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./download_enhanced.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Convenient & Fast</h3>
          <p>Experience seamless payments anytime, anywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./15437182476.png")}
          alt="First slide"
          />
        <Carousel.Caption>
            <h3>Secure Payments</h3>
          <p>Revolutionizing online transactions with palm scanning.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
