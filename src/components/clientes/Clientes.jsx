// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Swiper, SwiperSlide }from 'swiper/react'
import Hero from '../../assets/testimonialHero.png'

import './Clientes_module.css'

import { TestimonialsData } from '../../data/clientes';

const Clientes = () => {
  return (
    <div className='testimonials'>
        < div className="t-wrapper">
            <div className="t-container">
                <span>Bem Avaliado</span>
                <span>
                    Apresenta uma diaspora proteção a peles sensiveis. Reforce a proteção ao seus filhos.
                </span>
            </div>

           <img src={Hero} alt="" />

            <div className='t-container'>
                <span>100k</span>
                <span>Clientes Felizes e Satisfeitos</span>
            </div>
        </div>

        <div className='reviews'>Reviews</div>
            
            <div className="carousel">
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className='tCarousel'
                breakpoints={{
                    856: {
                        slidesPerView: 3
                    },
                    640: {
                        slidesPerView: 2
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
                >
                    {
                        TestimonialsData.map((testimonial, i)=> (
                            // eslint-disable-next-line react/jsx-key
                            <SwiperSlide>
                                <div key={i} className='testimonial'>
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
    </div>
  )
}

export default Clientes