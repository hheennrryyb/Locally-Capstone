import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.scss'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { urlFor } from '../lib/client';

const Hero = ({ heroData }) => {

    return (
        <>
            <div className={styles.container}>
                <Slide easing="ease">
                    {heroData.slice(1, 5).map((data, index) => {
                        return (
                            <div className={styles.slide} key={index}>
                                <div
                                    style={{ backgroundImage: `url(${urlFor(data.image)})` }}>
                                    {/* <span>Slide {index + 1}</span> */}
                                    <div className='flex flex-col items-center h-full justify-center '>
                                        <p className='text-3xl lg:text-6xl font-bold text-white max-w-3xl text-center'>{data.largeText1}</p>
                                        <p className='text-md text-white py-3 max-w-sm text-center'>{data.desc}</p>

                                        <button type="button" className="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xl px-5 py-2.5 text-center mr-2 mb-2 ">{data.buttonText}</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slide>
            </div>
        </>
    )
}

export default Hero