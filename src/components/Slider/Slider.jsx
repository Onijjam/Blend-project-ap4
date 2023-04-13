import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Card from "../Card/Card.jsx";
import CardCollection from "../CardCollection/CardCollection.jsx";
import CardIngredient from "../CardIngredient/CardIngredient.jsx";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function Slider({ data, cardType = "card" }) {

    const renderCard = (item, index) => {
        if (cardType === "collection") {
            return (
                <SwiperSlide key={index} className="!flex items-center inline-flex justify-center !w-48 ">
                    <CardCollection data={item} />
                </SwiperSlide>
            );
        } else if (cardType === "ingredient") { // Ajoutez le cas "ingredient"
            return (
                <SwiperSlide key={index} className="!flex items-center inline-flex justify-center !w-48">
                    <CardIngredient data={item} />
                </SwiperSlide>
            );
        } else {
            return (
                <SwiperSlide key={index} className="!flex items-center inline-flex justify-center !w-48">
                    <Card data={item} />
                </SwiperSlide>
            );
        }
    };

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
            className="w-1/2 max-h-96 mt-5 mb-5"
            initialSlide={1}
        >
            {(cardType === "ingredient" ? data.ingredients : data.drinks).map((item, index) => renderCard(item, index))}
        </Swiper>
    );
}

