import React from 'react'
import toast from 'react-hot-toast'

function Promotions() {
    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-32 ">
            <div className="grid max-w-screen-xl gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">

                <div onClick={() => toast.success('Code "Summer" For 20% OFF As Been Applied To Your Cart! ')} className="relative flex items-center justify-between p-8 bg-white rounded-md shadow-md hover:bg-blue-200 transition duration-500 hover:scale-105">
                    <div className="pr-4">
                        <h6 className="mb-2 font-semibold leading-5">
                            Use Code "Summer" For
                        </h6>
                        <h3 className='text-5xl font-bold text-blue-500 tracking-wider'>
                            20% OFF
                        </h3>
                        <p className="text-sm text-gray-900">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <svg
                            className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </div>
                </div>

                <div onClick={() => toast.success('$5 OFF As Been Applied To Your Cart! ')} className="relative flex items-center justify-between p-8 bg-white rounded-md shadow-md hover:bg-blue-200 transition duration-500 hover:scale-105">
                    <div className="pr-4">
                        <h6 className="mb-2 font-semibold leading-5">
                            First Time Customers
                        </h6>
                        <h3 className='text-5xl font-bold text-blue-500 tracking-wider '>
                            $5 OFF
                        </h3>
                        <p className="text-sm text-gray-900">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <svg
                            className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Promotions