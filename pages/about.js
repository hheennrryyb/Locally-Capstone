import React from 'react'
import { AboutFeature } from '../components'
import Slider from "react-slick";
import Image from 'next/image';
import slide1 from '../data/slides/1.png'
import slide2 from '../data/slides/2.png'
import slide3 from '../data/slides/3.png'
import slide4 from '../data/slides/4.png'
import slide5 from '../data/slides/5.png'
import slide6 from '../data/slides/6.png'
import slide7 from '../data/slides/7.png'
import henry from '../data/henry2.JPG'
import Link from 'next/link';


function about() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className=''>
            <div className='bg-gray-900 px-10 py-20'>
                <Slider {...settings} className='m-auto '>
                    <div>
                        <Image src={slide1} />
                    </div>
                    <div>
                        <Image src={slide2} />
                    </div>
                    <div>
                        <Image src={slide3} />
                    </div>
                    <div>
                        <Image src={slide4} />
                    </div>
                    <div>
                        <Image src={slide5} />
                    </div>
                    <div>
                        <Image src={slide6} />
                    </div>
                    <div>
                        <Image src={slide7} />
                    </div>
                </Slider>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-4xl md:px-24 lg:px-0 lg:py-15">
                <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2 ">
                        <Image
                            src={henry}
                            alt=""
                            className="object-cover	 w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-white lg:p-4 lg:pl-10 lg:w-1/2">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                About The Creator Of Locally
                            </p>
                        </div>
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                            Web Developer & Brain Station TA
                        </h5>
                        <p className="mb-5 text-gray-800">
                            I am an ambitious person who is devoted to develop aesthetically pleasing websites and has taken a vow to eradicate all dysfunctional ones. I am passionate and goal orientated and a high-spirited individual that always finds a way to lift team spirit. I find great fulfillment in building visually stunning and elaborate web apps by exploring the nuances of the problem.
                            <span className="font-bold"> Connect with me on LinkedIn!</span>
                        </p>
                        <div className="flex items-center">
                            <Link href="https://www.linkedin.com/in/henry-bellman/"><button

                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-sky-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                LinkedIn
                            </button></Link>
                            {/* <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                GitHub
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

            <AboutFeature />
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8 mb-20">
                <h5 className="mb-4 mt-8 text-4xl font-extrabold leading-none"> Whats Locally? </h5>
                <p className="mb-3 font-light text-black ">Localize revolutionizing how consumers shop and discover local products in their areas. Our marketplace is centered around giving local sellers an accessible B2C platform to empower entrepreneurs in growing thriving businesses.
                    Business owners can now have a low barrier to entry within the E-commerce world and have all the tools that comes with a modern marketplace. Shopping locally lowers consumer’s carbon footprint, bolsters the local economy, and promotes discovering exciting products from local retailers and makers.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="col-span-2">
                        <p className="mb-3 font-light text-black ">Localize is aiming to shift online consumer outlooks and impower local business owners. The project aims to improve the consumer’s environmental footprint, awareness to local economy, and to more connected and involved in the community. Currently there’s not a marketplace where local business owners can list and advertise their products; but are forced to pursue alternatives such as creating an online store where they don’t have the necessary knowledge, resources and capital to be successful. Many business owners are left without an online presence or many have incomplete stores/websites that don’t reflect their store.</p>
                        <p className="mb-3 font-light text-black ">Recently, with the pandemic having a huge impact on the economy, many local stores were forced to close down due to a heavy decline in sales and less people shopping in person. Many stores are left unable to reopen causing building vacancy, unemployment, and impacting local communities and economies. While local business struggled through the pandemic, online marketplaces like Amazon has had tremendous growth and increased profits. </p>
                    </div>
                    <p className="mb-3 font-light text-black ">The growth of theses giants will further dissolve communities and prevent local business from thriving. Localize can be the platform that empowers business most effected by this, by having both an accessible online marketplace and to have an online presence to bring more customers to their brick-and-mortar stores. </p>
                </div>
                <p className="mb-3 font-light text-black ">The user of localize would be anyone who loves to online shop and find unique items. The marketplace is designed to be seamless to purchase from and also be easy to navigate to physical location for item pickups. Localize will be powerful in SEO optimization to one true marketplace any shopper will need.</p>
                <p className="mb-3 font-light text-black ">Categories that Localize will be focusing on:
                    •	Arts, Crafts, & Sewing
                    •	Baby
                    •	Beauty & Personal Care
                    •	CDs & Vinyl
                    •	Clothing, Shoes and Jewelry
                    •	Collectibles & Fine Art
                    •	Garden & Outdoor
                    •	Health, Household & Baby Care
                    •	Home & Kitchen
                    •	Musical Instruments
                    •	Pet Supplies
                    •	Sports & Outdoors
                    •	Toys & Games
                    Many of these categories can be expended on but there’s an emphasis on either locally handmade goods, local brands and stores. The marketplace selection is vast and covers consumer demand from all aspects.
                </p>


            </div>
        </div>
    )
}

export default about