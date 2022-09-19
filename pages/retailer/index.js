import React from 'react'
import { client } from '../../lib/client'
import { Retailer } from '../../components'

function index({ retailerData }) {
    console.log(retailerData)
    return (
        <>
            <h1>Retailers</h1>
            <div className='products-container'>
                {retailerData?.map((retailer) => <Retailer key={retailer._id} retailer={retailer} />)}
            </div>

        </>
    )
}

export const getServerSideProps = async () => {
    // Grab all data from the sanity dashboard; 
    // const query = '* [_type == "product"]';
    // const products = await client.fetch(query);

    // const bannerQuery = '* [_type == "banner"]';
    // const bannerData = await client.fetch(bannerQuery);

    // const categoryQuery = '* [_type == "category"]';
    // const categoryData = await client.fetch(categoryQuery);

    const retailerQuery = '* [_type == "retailer"]';
    const retailerData = await client.fetch(retailerQuery);

    return {
        props: { retailerData }
        //Passed to top props
    }
}

export default index