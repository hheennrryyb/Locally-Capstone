import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, Banner, Hero, FeaturedMakers } from '../components'

const Home = ({ products, bannerData, heroData, categoryData, retailerData, NavData }) => {
  console.log(NavData)
  return (
    <>
      <Hero heroData={heroData} />

      {/* <Banner Banner={bannerData.length && bannerData[0]} /> */}
      <FeaturedMakers retailerData={retailerData} />

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  )
}

//pre-render page request using data returned below: 
export const getServerSideProps = async () => {
  // Grab all data from the sanity dashboard; 
  const query = "*[_type == 'product'] {...,categories->, retailer->}";
  const products = await client.fetch(query);

  const bannerQuery = '* [_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoryQuery = '* [_type == "category"]';
  const categoryData = await client.fetch(categoryQuery);

  const heroQuery = '* [_type == "hero"]';
  const heroData = await client.fetch(heroQuery);

  const retailerQuery = `*[_type == 'retailer'] {...,"product": *[_type == 'product' && references(^._id)]}`;
  const retailerData = await client.fetch(retailerQuery);

  const NavQuery = `*[_type == "navigation"]`;
  const NavData = await client.fetch(NavQuery);


  return {
    props: { retailerData, heroData, categoryData, products, bannerData, NavData }
    //Passed to top props
  }
}

export default Home