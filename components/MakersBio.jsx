import React from 'react'

import Link from 'next/link'

import { urlFor } from '../lib/client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MakersBio({ retailerData }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div>
            <div key={retailerData._id} className=" rounded-md max-w-sm p-6 bg-white drop-shadow-md mx-5">

                <div className="h-60 sm:min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                        src={urlFor(retailerData.image)}
                        //   alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>

                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-900">

                            <div>
                                <span className="text-lg font-medium" > {retailerData.name}</span>
                            </div>
                        </h3>
                        <p className="mt-1 text-sm font-light text-gray-900 max-h-14 text-ellipsis overflow-hidden">{retailerData.shortDescription}</p>
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900">{price}</p> */}
                </div>

                <div className='mb-8 hidden md:block'>
                    <Slider {...settings}>
                        {retailerData.product?.map((product, index) => {
                            return (
                                <div key={index}>
                                    <Link href={`/product/${product.slug.current}`}>
                                        <div className='mt-5 m-auto' >
                                            <img
                                                src={urlFor(product.image[0])}
                                                //   alt={product.imageAlt}
                                                className="h-16 w-16 lg:h-24 lg:w-24 object-cover object-center rounded-full"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                        <div></div>
                    </Slider>
                </div>
                <Link href={`/retailer/${retailerData.slug.current}`}><button className=" w-full mt-5 md:mt-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">{retailerData.name}'s Store Front</button></Link>
            </div>

        </div>

    )
}

export default MakersBio