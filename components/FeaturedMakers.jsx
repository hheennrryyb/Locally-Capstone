import React from 'react'
import { MakersBio } from '../components'

function FeaturedMakers({ retailerData }) {
    console.log(retailerData)
    return (
        <div className=''>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Makers In British Columbia</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {retailerData?.map((retailer) => <MakersBio retailerData={retailer} />)}
                </div>
            </div>
        </div>
    )
}

export default FeaturedMakers