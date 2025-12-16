"use client";

import Button from "@/components/button/Button";
import { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // start paused

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative pt-2 flex flex-col items-center justify-start pb-12 bg-[#fef3c7]">
      <div className="container ">
        {/* <div className="w-20 absolute">
          <Image
            src="/assets/img/logo.svg"
            alt="Logo"
            width={150}
            height={150}
          />
        </div> */}
        <div className="max-w-[900px] mt-12 text-center m-auto">
          <p className="py-1 px-4 bg-theme text-white rounded-full mb-6 w-max m-auto font-semibold">
            Proven Science-Based Training
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Loose Leash Mastery in 30 Days
          </h1>

          <h2 className="text-base sm:text-lg md:text-2xl font-body my-4 hero-desc">
            Stop Being Dragged Around by Your Dog
          </h2>
          <p>
            Finally walk with confidence instead of fighting for control every
            single step. The proven 30-day system that transforms pulling
            battles into calm, loose-leash walks even with reactive medium to
            large dogs.
          </p>
        </div>

        {/* VIDEO */}
        <div className="w-full flex justify-center mt-12 px-2">
          <div
            className="w-full max-w-[800px] aspect-video relative cursor-pointer"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg"
              src="/assets/video/hero.mp4"
              loop
              poster="/assets/img/thm.png"
            />

            {/* Play Icon when video is paused */}
            {!isPlaying && (
              <button className="absolute inset-0 flex items-center justify-center">
                <IoPlay
                  size={70}
                  className="text-white bg-black/40 rounded-full p-4 backdrop-blur-md"
                />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <Button
            label="Yes, Let’s Fix My Dog’s Pulling"
            className="mt-12 px-6 py-3 text-sm sm:text-base md:text-lg"
          />

          <p className="mt-6 text-sm sm:text-base text-center">
            Get Instant Access, Join 2,400+ dog owners who turned chaos into
            calm in just 30 days
          </p>
        </div>
      </div>
    </section>
  );
}
