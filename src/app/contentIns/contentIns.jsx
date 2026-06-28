"use client";

import React from "react";
import stl from "./contentIns.module.scss";
import Image from "next/image";

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

import papir from "../../../public/papir.png";
import whyJoin from "../../../public/contentInst/whyJoin.png";
import opening from "../../../public/contentInst/opening.png";
import build from "../../../public/contentInst/build.png";
import priceList from "../../../public/contentInst/priceList.png";
import storInst from "../../../public/contentInst/storInst.png";
import noWallsYet from "../../../public/contentInst/noWallsYet.png";
import whereWeTrain from "../../../public/contentInst/whereWeTrain.png";
import swedenNext from "../../../public/contentInst/swedenNext.png";
import coachNow from "../../../public/contentInst/couch.png";

const img = [
    whyJoin,
    whereWeTrain,
    swedenNext,
    build,
    priceList,
    storInst,
    noWallsYet,
    opening,
    coachNow
]

const ContentIns = () => {
    return( 
        <div className={stl.contentIns} id="instContent">
            <Image style={{ width: "100%" }} src={papir} alt="background" className={stl.bg}/>
            <h2 className={stl.contentIns__title}>Instagram Content</h2>
                <Swiper
                    className={stl.contentIns__slider}
                    slidesPerView={1}
                    spaceBetween={40}
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    breakpoints={{
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 70
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 90
                        }
                    }}
                >
                    {img.map((item, index) => (
                        <SwiperSlide key={index} className={stl.contentIns__card}>
                            <div className={stl.contentIns__slide}>
                                <Image src={item} alt="Instagram content example" className={stl.contentIns__icon}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    )
};

export default ContentIns;
