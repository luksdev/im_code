// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import * as s from './style';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

export default function Carousel() {
  return (
    <s.Container>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          // stretch: 0,
          // depth: 0,
          // modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box-card">
            <div className="box-content">
              <div className="box-title">
                Opa, você está perdido? Relaxa, vamos te ajudar.
              </div>
              <div className="color-category"></div>
              <div className="box-comment">
                Está função ser para registar e mostrar as responsabilidade
                sobre o uso de EPIJ, vamos te conectar com um sistema muito
                simples.
              </div>
              <div className="box-button">
                <button>Cadastrar colaborador</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="wrapper-start">
          <div className="box-card">
            <div className="box-content">
              <div className="box-title">
                Opa, você está perdido? Relaxa, vamos te ajudar.
              </div>
              <div className="color-category"></div>
              <div className="box-comment">
                Está função ser para registar e mostrar as responsabilidade
                sobre o uso de EPIJ, vamos te conectar com um sistema muito
                simples.
              </div>
              <div className="box-button">
                <button>Cadastrar colaborador</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box-card">
            <div className="box-content">
              <div className="box-title">
                Opa, você está perdido? Relaxa, vamos te ajudar.
              </div>
              <div className="color-category"></div>
              <div className="box-comment">
                Está função ser para registar e mostrar as responsabilidade
                sobre o uso de EPIJ, vamos te conectar com um sistema muito
                simples.
              </div>
              <div className="box-button">
                <button>Cadastrar colaborador</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="otherFunctions"> Entre outras funções </div>
    </s.Container>
  );
}
