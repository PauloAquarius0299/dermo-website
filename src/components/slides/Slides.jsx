
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Swiper, SwiperSlide,  } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import './Slides.css';

import { SliderProducts } from '../../data/produtos';

const Slides = () => {
  return (
    <div className="s-container">
      <Swiper
      className='mySwiper'
      
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={20}
        
        // eslint-disable-next-line react/jsx-no-duplicate-props
        
      >
        {SliderProducts.map((slide, i) => (
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide >
            <div key={i} className='left-s'>
              <div className='name'>
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}</span>
              <div className='btn'>Compre Agora</div>
            </div>
            <img src={slide.img} alt='produto' className='img-p' />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default Slides;
