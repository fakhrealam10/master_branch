"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { images } from "./images";

export default function Page() {
  return (
    <div className="container">
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        modules={[Autoplay]}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover"
                width={2000}
                height={5000}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
