import React from 'react'
import "../styles/SinglePageMiddle.css"
import section3 from "../../src/styles/airbnb-3.jpg"
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa"
import { placesStore } from '../store/Store'
import rev1 from "../styles/stars1.png"
import rev2 from "../styles/stars2.png"
import reviews from "../styles/rev.jpg";
import modalPic from "../styles/pic.png"




const SinglePageMiddle = () => {

    const params = useParams();
    const { id } = params;

    const placeClicked = placesStore.find((item) => item.id === id)

    const { stars } = placeClicked || {}

    return (<div>

        <p className='spmLine text-gray-300'>__________________________________________________________________________________________________________</p>

        <div className='section1-hold'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJvWSbrqMSscvluAAKMh7EMUWUoB8gpPTVm-r8k65tKOwvX0t' className='w-36' />

            <p>Free comprehensive booking protection included.</p>

            <p className='font-bold text-xl underline'>Explore further details.</p>
        </div>

        <p className='spmLine2 text-gray-300'>__________________________________________________________________________________________________________</p>

        <div className='section2-hold'>
            <p>Discover your ideal Bali staycation, where relaxation is our top priority.</p>
            <p>Discover Hideout, an eco stay in Gunung Agung's mountains, perfect for adventurous travelers seeking a tranquil hideaway. We're honored to be Airbnb's 4th most wished-for accommodation.</p>

            <p className="font-bold text-xl underline">Show more</p>

        </div>
                <div className='section3'>
                    <img src={section3} className="img_small w-full sm:w-20 lg:w-full sm:order-last" />
                </div>
         <p className='spmLine3 text-gray-300'>__________________________________________________________________________________________________________</p>


        <div className='spm-star'>
            <FaStar className='text-2xl st' />
        </div>

        <p className='spm-rev text-2xl'>{stars}</p>

        <div className='star-calc-hold'>

            <img src={rev1} className="spm-pic" />
            <img src={rev2} className="spm-pic" />

        </div>

        {/* <div className='review-hold'>

            <img src={reviews} className="spm-review " />

        </div> */}
        <div className='review-hold'>
    <img src={reviews} className="spm-review w-full sm:w-1/2"/>
</div>


        <button className='' onClick={(e) => e.preventDefault()}></button>

        <div className='agg'>
        <label htmlFor="my-modal-5" className="modal-button spm-rev-btn rounded-2xl btn float-left bg-red-500 hover:bg-blue-500 ">Display additional 14 reviews</label>
        {/* <label htmlFor="my-modal-5" className="modal-button spm-rev-btn rounded-2xl btn float-left">Display additional 14 reviews.</label> */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <label htmlFor="my-modal-5" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <FaStar className='modal-star text-yellow-400' />
                    <p className='modal-review font-semibold text-red-500'>{stars}, 14 reviews</p>



                    <img src={modalPic} className="modal-pic" />

                    <div className='modal-hold'>

                        <h3 className="text-lg font-bold uppercase">~ Fabulous stay</h3>
                        <p className="py-4">Among our stays at Horizon and Hideout, this one resonates with me more—the mesmerizing sound of the river creates an extraordinary atmosphere, perfect for chilling all day. Although it's more secluded upstairs, the abundant wildlife around you adds to the charm.
                         It's truly a delightful experience in a serene village, making it a wonderful journey to explore authentic Bali, its culture, 
                         and its people, especially on a scooter.</p>

                        <h3 className="text-lg font-bold uppercase">~Marvelous </h3>
                        <p className="py-4">We had a fantastic time at this pleasant retreat. The nature, bamboo living, and jungle shower made it a memorable experience,
                         and the provided yoga mats were a nice touch.</p>

                        <h3 className="text-lg font-bold uppercase">~ Superb stay experience</h3>
                        <p className="py-4">The place exceeded our expectations - a wonderful experience surrounded by nature, with friendly staff and amazing food.</p>

                        <h3 className="text-lg font-bold uppercase">~ Outstanding experience</h3>
                        <p className="py-4">Our stay at Hideout Bali was exceptional - the property was clean and beautiful, 
                        and we had a fantastic encounter with monitor lizards. The food was also great. Thanks for an amazing experience!</p>

                        <h3 className="text-lg font-bold uppercase">~ Overwhelmed</h3>
                        <p className="py-4">The exceptional surprise honeymoon trip at Hideout was a hit with my husband, and even though we encountered a snake on the last day,
                         I'm glad it wasn't on our first day, or we would've left immediately!</p>


                        <h3 className="text-lg font-bold uppercase">~Wonderful stay</h3>
                        <p className="py-4">A soulful retreat with stunning river sounds for all-day relaxation. 
                        Wildlife and village charm offer a delightful Bali experience on a scooter.</p>

                        <h3 className="text-lg font-bold uppercase">~ Terrific stay</h3>
                        <p className="py-4">We had an incredible time at this pleasant retreat, enjoying nature, bamboo living, and the epic jungle shower;
                         the provided yoga mats were a nice touch.</p>

                        <h3 className="text-lg font-bold uppercase">~ Splendid stay experience</h3>
                        <p className="py-4">The place was absolutely wonderful and everything we hoped it would be.
                            Being outside with nature was so special to us. The staff were wonderful and friendly.
                            The food was amazing!</p>

                        <h3 className="text-lg font-bold uppercase">~ Great experience</h3>
                        <p className="py-4">Our stay at Hideout Bali was amazing - a beautiful and clean property with fantastic monitor lizard encounters and great food;
                         thanks for the wonderful experience!</p>

                        <h3 className="text-lg font-bold uppercase">~ Impressed</h3>
                        <p className="py-4">The exceptional surprise honeymoon trip delighted my husband, and though we saw a snake on the last day,
                         I'm relieved it wasn't on our first day, or we would've left immediately!</p>

                    </div>
                </label>
            </label>
        </div>
    </div>)

}

export default SinglePageMiddle