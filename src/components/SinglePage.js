import React from 'react'
import { useParams } from 'react-router-dom'
import { placesStore } from '../store/Store'
import "../styles/SinglePage.css"
import { FaAirbnb } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"
import { IoMdThumbsUp } from "react-icons/io"
import { FaKey } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { RiMedal2Fill } from "react-icons/ri";
import CalendarFunc from './Calendar';
import { useState } from 'react';
import SinglePageMiddle from './SinglePageMiddle';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import { createContext } from 'react';
import "../styles/Tabs.css";

const SinglePage = () => {

    const [buttonOpen, setButtonOpen] = useState(false);
    const [buttonClose, setButtonClose] = useState(true);




    const IdContext = createContext();

    const buttonOpenHandler = (event) => {
        event.preventDefault();
        setButtonOpen(true)
        setButtonClose(false)
    }

    const buttonCloseHandler = (event) => {
        event.preventDefault();
        setButtonClose(false);
        setButtonOpen(false)

    }

    const params = useParams();
    const { id } = params;

    const placeClicked = placesStore.find((item) => item.id === id)

    const { name, homeMainPic, price, stars, carouselPic1, carouselPic2, carouselPic3, carouselPic4, carouselPic5 } = placeClicked || {}

    const [activeImg, setActiveImg] = useState(false);

    const [defaltImage, setDefaultImage] = useState(carouselPic1);


    const getImageSrcHnadler = (e) => {
        setDefaultImage(e.target.src)
        setActiveImg(true)
    }

    const setDefaultImgHnadler = () => {
        setDefaultImage(carouselPic1)
        setActiveImg(false);
    }


    return (

        <div>

            <div className='basicDeatils flex flex-row text-lg'>
                <p className='font-semibold uppercase'>{name}</p>
                <div className=''>
                    <FaStar className=' text-xl inline-block mr-2 text-yellow-400' />
                    <p className=' inline-block text-red-500'> {stars} </p>
                </div>
                <p className='text-purple-700'>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviews</p>

            </div>





            {activeImg === true ? <img src={defaltImage} className="single-page-main-pic cursor-pointer" /> : <img src={carouselPic1} className="single-page-main-pic cursor-pointer" />}


            <div className='absolute flex single-page-hold'>
                <img src={carouselPic2} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic3} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic4} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic5} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
            </div>

            <p className='features-text text-2xl font-semibold '>𝕰𝖓𝖙𝖎𝖗𝖊 𝖛𝖎𝖑𝖑𝖆 𝖍𝖔𝖘𝖙𝖊𝖉 𝖇𝖞 𝕾𝖆𝖗𝖆𝖓  </p>

            <p className='actual-features text-xl'>{Math.floor(Math.random() * 6) + 2} guests . {Math.floor(Math.random() * 6) + 2} . bedrooms {Math.floor(Math.random() * 5) + 5} beds . {Math.floor(Math.random() * 2) + 3}  bathrooms</p>

            <p className='line1 text-gray-300'>__________________________________________________________________________________________________________</p>
            <p className='line2 text-gray-300'>__________________________________________________________________________________________________________</p>




            <div className='icon-hold'>
                <RiMedal2Fill className='text-3xl' />
                <FaKey className='text-3xl' />
                <FaCalendarCheck className='text-3xl' />
            </div>

            <div className='heading-hold'>
                <p className='text-xl font-semibold'>𝐒𝐚𝐫𝐚𝐧 𝐢𝐬 𝐚 𝐒𝐮𝐩𝐞𝐫𝐡𝐨𝐬𝐭. </p>
                <p className='text-xl font-semibold'>𝐆𝐫𝐞𝐚𝐭 𝐜𝐡𝐞𝐜𝐤-𝐢𝐧 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞.  </p>
                <p className='text-xl font-semibold'>𝐅𝐫𝐞𝐞 𝐜𝐚𝐧𝐜𝐞𝐥𝐥𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 𝐁𝐨𝐨𝐤𝐢𝐧𝐠 𝐢𝐧 𝟐𝟒 𝐡𝐨𝐮𝐫𝐬. </p>
            </div>

            <div className='description-hold'>
                <p>𝐄𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧𝐚𝐥 𝐡𝐨𝐬𝐭𝐬 𝐝𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐭𝐨 𝐞𝐧𝐬𝐮𝐫𝐢𝐧𝐠 𝐨𝐮𝐭𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐬𝐭𝐚𝐲𝐬 𝐟𝐨𝐫 𝐭𝐡𝐞𝐢𝐫 𝐠𝐮𝐞𝐬𝐭𝐬, 𝐫𝐞𝐜𝐞𝐢𝐯𝐢𝐧𝐠 𝐭𝐨𝐩 𝐫𝐚𝐭𝐢𝐧𝐠𝐬 𝐟𝐨𝐫 𝐭𝐡𝐞𝐢𝐫 𝐞𝐟𝐟𝐨𝐫𝐭𝐬.</p>
                <p className='-mt-4 sm:mt-0'>𝐓𝐡𝐞 𝐜𝐡𝐞𝐜𝐤-𝐢𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 𝐫𝐞𝐜𝐞𝐢𝐯𝐞𝐝 𝐚 𝐬𝐭𝐞𝐥𝐥𝐚𝐫 𝟓-𝐬𝐭𝐚𝐫 𝐫𝐚𝐭𝐢𝐧𝐠 𝐟𝐫𝐨𝐦 𝟗𝟎% 𝐨𝐟 𝐫𝐞𝐜𝐞𝐧𝐭 𝐠𝐮𝐞𝐬𝐭𝐬..</p>
                <p className='mt-4 sm:mt-0'>𝐍𝐨 𝐐𝐮𝐫𝐢𝐞𝐬 𝐫𝐚𝐢𝐬𝐞𝐝.</p>

            </div>

            <div className='side-box-card absolute'>
                <p className='single-page-price font-semibold text-2xl'> ${price}/ 𝐍𝐢𝐠𝐡𝐭  </p>
                <div className='ab'>
                    <FaStar className='text-yellow-400' />
                </div>

                <p className='rev-card absolute text-red-500'>{stars}</p>
                <p className='rev2-card font-semibold'> <p>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviews</p>  </p>

            </div>

            <div className='reserve-date-button-holder'>
                <button className='reserve-date-button rounded-xl' onClick={buttonOpenHandler}> Reserve</button>

            </div>


            <div className="s">
                <CalendarFunc placesId={id} placesNam={name} placesPic={carouselPic1} buttonopenState={buttonOpen} buttonCloseState={buttonClose} closeFunc={buttonCloseHandler} />
            </div>

            <div className='expense-title-hold'>
                <p>𝑺𝒆𝒓𝒗𝒊𝒄𝒆 𝑪𝒉𝒂𝒓𝒈𝒆</p>
                <p>𝑪𝒍𝒆𝒂𝒏𝒊𝒏𝒈 𝑪𝒉𝒂𝒓𝒈𝒆</p>
                <p>𝑷𝒓𝒐𝒄𝒆𝒔𝒔𝒊𝒏𝒈 𝑪𝒉𝒂𝒓𝒈𝒆</p>
            </div>

            <div className='calculated-expense-hold'>

                <p className='relative w-40 le'>calculated at next step</p>
                <p>150</p>
                <p>250</p>
                <p>530</p>

            </div>
            <div className='line-total text-gray-300'>_____________________________________________________</div>

            <div className='price-total-text absolute font-semibold text-xl uppercase hidden sm:block'>Total</div>

            <p className='price-total absolute font-semibold text-xl hidden sm:block'>Calculated At Checkout</p>
           
            <SinglePageMiddle />

            <Footer1 />

            <Footer2 />


        </div>
    )
}


export default SinglePage;
