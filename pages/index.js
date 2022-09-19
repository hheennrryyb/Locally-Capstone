import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({ products, bannerData, categoryData, retailerData }) => {
  return (
    <>
      <h1 className='products-heading'>Locally</h1>
      <h2>Shop From All Your Local Favorite Sellers </h2>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

//pre-render page request using data returned below: 
export const getServerSideProps = async () => {
  // Grab all data from the sanity dashboard; 
  const query = '* [_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '* [_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoryQuery = '* [_type == "category"]';
  const categoryData = await client.fetch(categoryQuery);

  // const retailerQuery = '* [_type == "retailer"]';
  // const retailerData = await client.fetch(retailerQuery);

  return {
    props: { products, bannerData, categoryData }
    //Passed to top props
  }
}

export default Home