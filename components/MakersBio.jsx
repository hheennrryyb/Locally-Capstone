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
        slidesToScroll: 3
    };

    return (
        <div>
            <div key={retailerData._id} className=" h-128 rounded-md  p-6 bg-white drop-shadow-md ">
                <Link href={`/retailer/${retailerData.slug.current}`}>
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img
                            src={urlFor(retailerData.image)}
                            //   alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                </Link>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link href={`/retailer/${retailerData.slug.current}`}>
                                <div>
                                    <span className="text-lg font-medium" > {retailerData.name}</span>
                                </div>
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 max-h-14 text-ellipsis overflow-hidden">{retailerData.shortDescription}</p>
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900">{price}</p> */}
                </div>

                <div>
                    <Slider {...settings}>
                        {retailerData.product?.map((product) => {
                            return (
                                <Link href={`/product/${product.slug.current}`}>
                                    <div className='mt-5 m-auto'>
                                        <img
                                            src={urlFor(product.image[0])}
                                            //   alt={product.imageAlt}
                                            className="h-24 w-24 object-cover object-center rounded-full"
                                        />
                                    </div>
                                </Link>
                            )
                        })}
                        <div></div>
                    </Slider>
                </div>
            </div>

        </div>

    )
}

export default MakersBio