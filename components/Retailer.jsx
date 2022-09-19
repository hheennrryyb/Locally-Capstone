import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Retailer = ({ retailer: { logo, title, slug, shortDescription } }) => {
    // console.log(categories)
    return (
        <div>
            <Link href={`/retailer/${slug.current}`}>
                <div className='product-card'>
                    <img
                        src={urlFor(logo && logo)}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className='product-name'>{title}</p>
                    <p>{shortDescription}</p>

                </div>

            </Link>

        </div>
    )
}

export default Retailer