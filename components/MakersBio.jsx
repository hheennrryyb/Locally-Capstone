import React from 'react'

import Link from 'next/link'

import { urlFor } from '../lib/client'

function MakersBio({ retailerData }) {
    // console.log(retailerData)
    return (
        <div>
            <div key={retailerData._id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                        src={urlFor(retailerData.image)}
                        //   alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link href={``}>
                                <div>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {retailerData.name}
                                </div>
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{retailerData.shortDescription}</p>
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900">{price}</p> */}
                </div>
            </div>
        </div>
    )
}

export default MakersBio