import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

function Category({ categoryData }) {
    console.log(categoryData)
    return (
        <div>
            <Link href={`/category/${categoryData.slug.current}`}>
                <div className='mx-auto max-w-2xl px-4 pt-10 pb-5 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-5 lg:pb-5 h-full w-full '>
                    <div className="overflow-hidden rounded-lg h-full w-full  ">
                        <div style={{
                            backgroundImage: `url(${urlFor(categoryData.image[0])})`, backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }} className="h-full w-full ">
                            <div className='bg-gradient-to-r from-blue-500  rounded-lg p-10 h-full w-full '>
                                <div >
                                    <h2 className='text-4xl font-bold text-white sm:text-4xl'>{categoryData.title}</h2>
                                    {/* <h3 className='text-xl font-light tracking-tight text-white sm:text-xl'>From British Columbia</h3> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Category