"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { selectedWorks } from "@/data/selectedWorks";

export default function SelectedWork() {

    return (
        <section id="selected-work" className="mt-40 px-5 flex justify-center">
            <div className="w-full max-w-7xl">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    آثار منتخب و پروژه‌ها
                </h2>

                <Swiper
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    modules={[Navigation, Pagination, Autoplay]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {selectedWorks.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-secondary border border-muted rounded-xl  
                                            transition-all duration-300 hover:shadow-glow-soft 
                                            min-h-[420px] flex flex-col overflow-hidden"
                            >
                                {/* Image */}
                                <div className="h-56 w-full bg-gray-800 relative">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col gap-3 h-full flex-1">
                                    <h3 className="text-xl font-semibold text-text leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted text-sm leading-[1.7] ">
                                        {item.desc}
                                    </p>

                                    <span className="text-primary font-semibold mt-auto">
                                        {item.date}
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
