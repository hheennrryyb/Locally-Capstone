import React from 'react'
import { SearchBar } from './index'

function Feature() {
    return (

        <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 ">
            <div className="max-w-3xl mb-10 sm:mx-auto">
                <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:text-center">
                    Locally is revolutionizing how consumers shop & discover{' '}
                    <span className="inline-block text-sky-500">
                        local products in their areas.
                    </span>
                </h2>
            </div>
            <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
                <div className="flex">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-2 font-semibold leading-5">Unique & Handmade </h6>
                        <p className="text-sm text-gray-900">
                            Our marketplace is a vibrant community of real people connecting over special goods. The platform empowers sellers to do what they love and helps buyers find what they love.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-2 font-semibold leading-5">Support Local Communities</h6>
                        <p className="text-sm text-gray-900">
                            From the specific to the unexpected (or custom-made), our search tools help buyers explore all the special one-of-a-kind items offered by Locally Makers.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">

                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-2 font-semibold leading-5">Quality Products</h6>
                        <p className="text-sm text-gray-900">
                            Our platform connects them with millions of buyers looking for an alternative - something special with a human touch, for those moments in life that deserve imagination.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <SearchBar />
            </div>
        </div>
    );

}

export default Feature