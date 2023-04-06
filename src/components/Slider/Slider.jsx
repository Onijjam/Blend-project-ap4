import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Card from "../Card/Card.jsx";

SwiperCore.use([EffectCoverflow,Pagination]);

export default function Slider({ data }) {
    /*{data.drinks.map((item, index) => (
        <SwiperSlide key={index}>
            <div className="flex justify-center">
                <Card data={item} className="items-center" />
            </div>
        </SwiperSlide>
    ))}*/

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={-50}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={true}
            className="w-1/2 h-96"
        >
            {data.drinks.map((item, index) => (
                <SwiperSlide key={index} className="!flex items-center inline-flex justify-center !w-48">
                    <Card data={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}