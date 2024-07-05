import React from 'react';
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import {Link} from "react-router-dom";
import type {SwiperProps} from "swiper/react";
import {clientsFeedback} from "../../assets/utils/constants";


export default function Feedbacks() {
    const swiperRef = useRef<SwiperProps>(null);

    function moveToSlide(index :number) {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    }
    return (
        <section className="clients-feedback py-14 md:py-20">
            <div className="max-w-[800px] mx-auto">
                <div className="pb-10 md:pb-20 relative text-center">
                    <div className="container">
                        <h2 className="section-header-subtitle">
                            Our Partners
                        </h2>
                        <h3 className="section-header-heading">
                            Collaborating with inspiring companies
                        </h3>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-4 mb-10">
                        {clientsFeedback.map((client, index) => {
                                return (
                                    <div key={index} onClick={() => moveToSlide(index)}>
                                        <div className="border border-[#363b3f] h-[160px] w-full flex justify-center items-center cursor-pointer grayscale">
                                            <img src={client.logo} alt={client.companyName} />
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                        <Swiper
                            ref={swiperRef}
                            effect={'fade'}
                            modules={[EffectFade]}
                            fadeEffect={{ crossFade: true }}
                        >
                            {clientsFeedback.map((client, index) => {
                            return (
                                <SwiperSlide className="text-light">
                                    <div className="border border-[#363b3f] p-6 w-full cursor-grab">
                                        <blockquote className="text-xl">{client.feedback}</blockquote>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 mt-4">
                                                <div className="w-8 h-8">
                                                    <img src={client.image} alt={client.name}/>
                                                </div>
                                                <p className="font-medium text-base">
                                                    {client.name}, {client.designation}, {client.companyName}
                                                </p>
                                            </div>
                                            <Link to="/contact" className="styled-button mt-4">
                                                View Project
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z"
                                                          fill="currentColor"></path>
                                                </svg>
                                            </Link></div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        </Swiper>
                </div>
            </div>
        </section>
    )
}
