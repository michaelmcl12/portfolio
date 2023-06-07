import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";

import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'

const Carousel = () => {
    return (
        <Swiper
            effect={"flip"}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
             delay: 3000,
             disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFlip]}
            className="mySwiper"                >
                        <SwiperSlide><img src={img1}></img></SwiperSlide>
                        <SwiperSlide><img src={img2}></img></SwiperSlide>
                        <SwiperSlide><img src={img3}></img></SwiperSlide>
                        <SwiperSlide><img src={img4}></img></SwiperSlide>
                    </Swiper>

    )
}

export default Carousel