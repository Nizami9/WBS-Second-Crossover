import Carousel from 'carousel-react-rcdev'
import React from 'react';
import "./Slider.css";

const Slider = () => {
      return (
    <Carousel max_width={100}>
        <img src='https://via.placeholder.com/151' alt='imagem' title='imagem' />
        <img src='https://via.placeholder.com/152' alt='imagem' title='imagem' />
        <img src='https://via.placeholder.com/153' alt='imagem' title='imagem' />
        <img src='https://via.placeholder.com/154' alt='imagem' title='imagem' />
        <img src='https://via.placeholder.com/155' alt='imagem' title='imagem' />
    </Carousel>
  )
}

export default Slider
