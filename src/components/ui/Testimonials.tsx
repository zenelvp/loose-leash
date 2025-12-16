/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { testimonialData } from "@/data/testimonials";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper Imports
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ArrowButton = ({ onClick, children }: any) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full bg-theme/70 hover:bg-theme text-body flex items-center justify-center cursor-pointer"
  >
    {children}
  </button>
);

export default function Testimonials() {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="space bg-bg py-16">
      <div className="container mx-auto px-4">
        {/* Title + Arrows */}
        <div className="text-center max-w-5xl m-auto">
          <h3 className="text-theme mb-4 font-semibold">PROVEN BY SCIENCE</h3>
          <p>
            Our methods are backed by peer-reviewed research from Applied Animal
            Behaviour Science and the Journal of Veterinary Behavior. Studies
            show reward-based training creates better obedience and fewer
            problem behaviors than harsh corrections.
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-8 items-center mb-10 mt-20">
          <h2 className="text-2xl md:text-4xl font-bold">
            REAL RESULTS FROM DOG OWNERS LIKE YOU
          </h2>

          <div className="flex gap-3">
            <ArrowButton onClick={() => swiperRef.current?.slidePrev()}>
              <FaChevronLeft />
            </ArrowButton>
            <ArrowButton onClick={() => swiperRef.current?.slideNext()}>
              <FaChevronRight />
            </ArrowButton>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col items-start">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full mb-6 object-cover"
                />
                <p className="text-[18px] mb-4 text-title">{item.text}</p>
                <h6 className="font-semibold text-title">{item.name}</h6>
                <p className="text-title text-sm">{item.designation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Section */}
        {/* <div className="bg-theme mt-8 p-8 text-center max-w-5xl m-auto rounded-3xl">
          <h3 className="mb-4 text-white">THOUSANDS OF SUCCESS STORIES</h3>
          <p className="text-white">
            Over 5,000 dog owners have used our Threshold Mapping system to
            transform their walks. From reactive rescues to strong pullers, this
            method works for dogs of all backgrounds.
          </p>
        </div> */}
      </div>
    </section>
  );
}
