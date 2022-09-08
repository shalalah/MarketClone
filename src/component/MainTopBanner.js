import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../css/maintopbanner.css';

import Slide1 from "../assets/banner/slide1.avif";
import Slide2 from "../assets/banner/slide2.avif";
import Slide3 from "../assets/banner/slide3.avif";
import Slide4 from "../assets/banner/slide4.avif";
import Slide5 from "../assets/banner/slide5.avif";
import Slide6 from "../assets/banner/slide6.avif";

export default function MainTopBanner() {
    return (
    <div className='MainTopBanner'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                type: "fraction",}}
                navigation={true}
                modules={[Autoplay,Pagination, Navigation]}
            className='swiper-container'>
            <div className="swiper-wrapper">
            <SwiperSlide className='swiper-slide'>
            <img
                class="banner_image"
                src={Slide1}
                alt="Slide 1"
            />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <img
                class="banner_image"
                src={Slide2}
                alt="Slide 2"
            />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <img
                class="banner_image"
                src={Slide3}
                alt="Slide 3"
            />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <img
                class="banner_image"
                src={Slide4}
                alt="Slide 4"
            />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <img
                class="banner_image"
                src={Slide5}
                alt="Slide 5"
            />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <img
                class="banner_image"
                src={Slide6}
                alt="Slide 6"
            />
            </SwiperSlide>
            </div>
            </Swiper>
    </div>
    )
}
