import React from 'react'
import Image from 'next/image'
import Photo from '../data/locally-bio-banner.jpg'
import Link from 'next/link'

function AboutFeature() {
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">

                    <h5 className="mb-4 mt-8 text-4xl font-extrabold leading-none">
                        Whats Locally?
                        <br className="hidden md:block" />
                        And Whats Our Mission?
                        <span className="inline-block text-blue-500">
                            To Empower Makers & Grow Communities
                        </span>
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Localize revolutionizing how consumers shop and discover local products in their areas. Our marketplace is centered around giving local sellers an accessible B2C platform to empower entrepreneurs in growing thriving businesses.
                        Business owners can now have a low barrier to entry within the ecommerce world and have all the tools that comes with a modern marketplace. Shopping locally lowers consumer’s carbon footprint, bolsters the local economy, and promotes discovering exciting products from local retailers and makers.

                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <Link href='/about'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">More About Locally</button></Link>
                </div>
                <div>

                    <Image
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={Photo}
                        alt="Locally Image"
                    />

                </div>
            </div>
        </div>

    )
}

export default AboutFeature