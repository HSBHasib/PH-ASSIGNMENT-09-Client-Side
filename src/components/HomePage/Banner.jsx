"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  // Banner Section Data Store in form of 'Array Of Object'
  const bannerData = [
    {
      id: 1,
      heading: "Modern Healthcare Designed for Your Family.",
      description:
        "Connect with world-class specialists and manage your family's health through a seamless digital experience. Medical excellence, delivered with a professional touch.",
      image: "/assets/banner3.png",
    },
    {
      id: 2,
      heading: "Your Health, Our Priority. Anytime, Anywhere.",
      description:
        "Access 24/7 virtual consultations with certified physicians. Get instant prescriptions, medical advice, and follow-up care from the comfort of your home.",
      image: "/assets/banner2.png",
    },
    {
      id: 3,
      heading: "Expert Medical Specialists Just a Click Away.",
      description:
        "Find and book appointments with top-rated pediatricians, cardiologists, and therapists. Specialized healthcare tailored directly to your unique needs.",
      image: "/assets/banner1.png",
    },
    {
      id: 4,
      heading: "Comprehensive Care and Secure Health Records.",
      description:
        "Track your medical history, view lab reports, and manage upcoming appointments safely in our secure patient portal. Dedicated support for your entire wellness journey.",
      image: "/assets/banner4.png",
    },
  ];

  return (
    <section className="bg-[#f0f7ff] py-14  px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="hero-swiper"
        >
          {bannerData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - ( Text Details ) */}
                <div className="space-y-6 text-left max-w-xl">
                  <h1 className="text-4xl sm:text-5xl font-bold text-[#191C20] leading-tight tracking-tight">
                    {data.heading}
                  </h1>
                  <p className="text-base sm:text-lg text-[#404750] leading-relaxed">
                    {data.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link href='/all-appointments'>
                    <button className="cursor-pointer bg-[#1e73be] text-[17px] hover:bg-[#165a94] text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all duration-300 active:scale-95">
                      Browse Doctors
                    </button>
                    </Link>
                    <Link href='/dashboard'>
                    <button className="cursor-pointer border-2 hover:bg-[#1A6FA8]/8 border-[#1A6FA8]/8 text-[17px] px-6 py-2.5 font-semibold  rounded-lg transition-all duration-300 active:scale-95">
                      My Bookings
                    </button>
                    </Link>
                  </div>
                </div>

                {/* Right Side - ( Image ) */}
                <div className="flex justify-center lg:justify-end">
                  <div className="bg-[#1A6FA8]/8 p-4 sm:p-5 rounded-2xl shadow-xl max-w-[430px] w-full">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
                      <Image
                        src={data.image}
                        alt="BannerImage"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
