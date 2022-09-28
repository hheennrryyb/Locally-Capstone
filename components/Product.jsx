import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price, _id, retailer } }) => {

    return (
        <div>

            <div key={_id} className="group relative">
                <div className="h-56 sm:min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <Link href={`/product/${slug.current}`}>
                        <img
                            src={urlFor(image && image[0])}
                            //   alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </Link>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link href={`/product/${slug.current}`}>
                                <div className='h-10 overflow-hidden'>

                                    <p className="text-sm font-light text-gray-900 text-clip">{name}</p>
                                </div>
                            </Link>
                        </h3>
                        {retailer.name &&
                            <p className="mt-1 text-sm text-gray-500">By: {retailer.name}</p>
                        }
                    </div>
                    <p className="text-sm font-medium text-gray-900 ml-10">${price}</p>
                </div>
            </div>

        </div>
    )
}

export default Product


// {/* <Link href={`/product/${slug.current}`}>
// <div className='product-card'>
//     <img
//         src={urlFor(image && image[0])}
//         width={250}
//         height={250}
//         className="product-image"
//     />
//     <p className='product-name'>{name}</p>
//     <p className='product-price'>${price}</p>
//     {/* <p>{categories.title}</p> */}

// </div>

// </Link> */}