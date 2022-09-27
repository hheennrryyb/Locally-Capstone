import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.scss'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { urlFor } from '../lib/client';

const Hero = ({ heroData }) => {
    console.log(heroData)
    return (
        <>
            <div className={styles.container}>
                <Slide easing="ease">
                    {heroData.slice(1, 4).map((data, index) => {
                        return (
                            <div className={styles.slide} key={index}>
                                <div
                                    style={{ backgroundImage: `url(${urlFor(data.image)})` }}>
                                    {/* <span>Slide {index + 1}</span> */}
                                    <p className='text-6xl text-white max-w-lg'>{data.largeText1}</p>
                                    <p className='text-md text-white py-3 max-w-sm'>{data.desc}</p>

                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{data.buttonText}</button>

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