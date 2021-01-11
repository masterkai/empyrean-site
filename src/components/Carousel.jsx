import React from "react";
// import Swiper core and required components
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const Carousel = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image src='/images/banner01.png' width='1920px' height='860px'/></SwiperSlide>
      <SwiperSlide><Image src='/images/banner02.jpg' width='1920px' height='860px'/></SwiperSlide>
      <SwiperSlide><Image src='/images/banner03.jpg' width='1920px' height='860px'/></SwiperSlide>
      <SwiperSlide><Image src='/images/banner04.jpg' width='1920px' height='860px'/></SwiperSlide>
      <SwiperSlide><Image src='/images/banner05.jpg' width='1920px' height='860px'/></SwiperSlide>
      <SwiperSlide><Image src='/images/banner06.jpg' width='1920px' height='860px'/></SwiperSlide>
      <SwiperSlide><Image src='/images/banner07.jpg' width='1920px' height='860px'/></SwiperSlide>

    </Swiper>
  );
};

export default Carousel