import React, { useState } from "react";
import { Alert, Tabs, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper/modules";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";
import { getBusPopulor } from "../services/api";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

const picBuses = [
  {
    src: hero1,
    alt: "picture bus",
  },
  {
    src: hero2,
    alt: "picture bus",
  },
  {
    src: hero3,
    alt: "picture bus",
  },
  {
    src: hero4,
    alt: "picture bus",
  },
];

const PictureBus = () => {
  return (
    <div className="pb-8">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        lazy={true}
        navigation={true}
        modules={[Navigation]}
        className="h-[340px]"
      >
        {picBuses.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-[510px] mx-auto h-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PictureBus;
