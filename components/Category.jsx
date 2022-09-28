import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

function Category({ categoryData }) {

    return (
        <div>
            <Link href={`/category/${categoryData.slug.current}`}>
                <div className='mt-5'>
                    <div style={{
                        backgroundImage: `url(${urlFor(categoryData.image[0])})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }} className=" w-full h-52 rounded-md  hover:blur-sm z-0">
                        <div className='bg-gradient-to-r from-gray-800 w-full md:pl-12 py-20 h-52 rounded-md transition duration-500 hover:scale-105'>
                            <div className='ml-5'>
                                <h2 className='text-4xl font-bold text-white sm:text-4xl z-50'>{categoryData.title}</h2>
                                {/* <h3 className='text-xl font-light tracking-tight text-white sm:text-xl'>From British Columbia</h3> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Category