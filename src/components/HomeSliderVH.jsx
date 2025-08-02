'use client'
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core styles
import 'swiper/css/navigation'; // optional, based on modules
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { sliderData } from "@/lib/fakeData/sliderData";
import SliderCard from "@/lib/ui/SliderCard";

const HomeSliderVH = () => {
  return (
    <>
        <Swiper
            className="h-full"
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={1000}
        >
            {
                sliderData.map(({id, img, name, roll, desc, num, email, info }) =>{
                    return(
                        <SwiperSlide key={id} id={id}>
                            <div className="flex flex-wrap h-full">
                                <SliderCard name={name} roll={roll} desc={desc} num={num} email={email} info={info} />
                                <div className="w-full lg:w-3/5 bg-cover lg:bg-center min-h-[20rem] lg:min-h-auto" style={{backgroundImage: `url(${img.src})`}}></div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </>
  );
};

export default HomeSliderVH;
