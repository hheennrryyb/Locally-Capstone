import React from 'react'
import { MakersBio } from '../components'
import Slider from "react-slick";

function FeaturedMakers({ retailerData }) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10%",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "15%",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "8%",
                }
            }
        ]
    };

    return (
        <div className=''>
            <div className='mx-auto pt-10 pb-5 px-4  sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className=" text-2xl font-bold tracking-tight text-gray-900">Makers In British Columbia</h2>
            </div>
            <div className="">
                <div className='mb-10 overflow-hidden'>
                    {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"> */}
                    <Slider {...settings}>
                        {retailerData?.slice(1, 6).map((retailer) => <MakersBio key={retailer._id} retailerData={retailer} />)}
                    </Slider>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default FeaturedMakers