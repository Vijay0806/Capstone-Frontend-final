import React from 'react'
import { placesStore } from '../store/Store'
import "../styles/Page1.css";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FiHeart } from "react-icons/fi"
import { BsStars } from "react-icons/bs"
import {Pagination} from "swiper";
import {FaBath, FaBed,FaBuilding } from "react-icons/fa";
 
// Page 1-Tropical:


const Page1 = ({ pushDown }) => {


    return (
        <div>
            <div className='tab1-hold flex justify-center md:mb-48 mb-28 items-center sm:gap-12 gap-0 -mt-16 flex-wrap w-full'>
                {placesStore.map((item => {
                    if (item.type === "tropical") {
                        return (
                            <div className='card boxsh' key={item.id}>

                                <Link to={`/${item.id}`}>

                                    <Swiper
                                        spaceBetween={5}
                                        slidesPerView={1}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        loop={true}
                                        observer={true}
                                        observeParents={true}
                                        parallax={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}

                                    >
                                        <SwiperSlide>
                                            <img src={item.homeMainPic} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic1} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic2} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic3} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic4} className="cardImg" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={item.carouselPic5} className="cardImg" />
                                        </SwiperSlide>

                                    </Swiper>

                                    {item.pets && <div className='flex label'> <BsStars />Famous</div>}

                                    <div className='flex gap-0 pl-3 pr-3 justify-between'>

                                        <div className='flex'>
                                            <p className='text-green-600 font-semibold mr-1 text-2xl'> ${item.price.toLocaleString()}</p>
                                            <p className='text-blue-400 text-sm pt-2'> /𝕞𝕠𝕟𝕥𝕙</p>
                                        </div>

                                        <FiHeart className='text-sm heartCrad  boxsh' />

                                    </div>

                                    <p className='text-2xl pl-3'> {item.name} </p>

                                    <p className='text-gray-400 text-sm pl-3 mb-3 mt-2'> Visit Pure Green Valleys and Lakes  </p>
                                    <p className="text-yellow-400">★★★★✫</p>
                                    <hr className='mb-4' />

                                    <div className='flex justify-center pl-2 gap-4 md:gap-3'>
                                        
                                        <span className='flex items-center'> <FaBath className=' md:text-2xl text-xl mr-2' /> <p className='text-sm text-gray-400 w-16'>{Math.floor(Math.random() * 5) + 1} Shower </p> </span>
                                        <span className='flex items-center'> <FaBed className=' md:text-2xl text-xl mr-2' /> <p className='text-sm text-gray-400 w-16'>{Math.floor(Math.random() * 5) + 2}Beds </p></span>
                                        <span className='flex items-center'> <FaBuilding className=' md:text-2xl text-xl mr-2' /> <p className='text-sm text-gray-400 w-16'> {Math.floor(Math.random() * 1) + 2}Floors </p></span>

                                    </div>

                                </Link>
                            </div>
                        )
                    }

                }))}
            </div>

        </div >
    )
}

export default Page1
//
