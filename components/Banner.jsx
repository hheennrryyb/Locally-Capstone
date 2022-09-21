import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Banner = ({ Banner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className=''>{Banner.smallText}</p>
                <h3>{Banner.midText}</h3>
                <h1>{Banner.largeText1}</h1>
                <img src={urlFor(Banner.image)} alt='Product' className='hero-banner-image' />
            </div>

            <div>
                <Link href={`/product/${Banner.product}`}>
                    <button type="button">{Banner.buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>{Banner.desc}</p>

                </div>
            </div>
        </div>
    )
}

export default Banner