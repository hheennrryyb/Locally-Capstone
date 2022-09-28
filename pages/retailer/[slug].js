import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'

function categorySlug({ products, retailerData }) {


    return (
        <>
            <div className=" mt-10 ">
                <div style={{
                    backgroundImage: `url(${urlFor(retailerData.banner)})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }} className="">
                    <div className='bg-gradient-to-r from-white'>
                        <div className='lg:max-w-6xl m-auto py-10 flex flex-wrap justify-center md:justify-start items-center'>

                            <img className="w-52 h-52 object-cover rounded-full " src={urlFor(retailerData.image)} alt="image description"></img>
                            <div className='px-5 md:pl-10'>
                                <h2 className='text-4xl font-bold text-gray-900 sm:text-4xl'>{retailerData.name}</h2>
                                <h3 className='text-xl font-light tracking-tight text-gray-900 sm:text-xl'>From British Columbia</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-5'>


                <div className='p-5 lg:p-10 flex flex-wrap bg-gray-50 rounded-md mt-10'>

                    <div className="lg:w-2/3 md:pr-10">
                        <h3 className="text-lg font-medium text-gray-900">About Me</h3>
                        <p className="text-base text-gray-900">{retailerData.description}</p>
                    </div>

                    <div className='lg:w-1/3 pb-20'>
                        <h3 className='text-lg font-medium text-gray-900 mt-4 mb-2'>Store Location:</h3>
                        <iframe
                            className='w-full h-full min-h-52'
                            // frameborder="0"
                            scrolling="no"
                            // marginheight="0"
                            // marginwidth="0"
                            src={`https://maps.google.com/maps?q=${retailerData.location.lat},${retailerData.location.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        >
                        </iframe>
                        <small>
                            <a
                                href={`https://maps.google.com/maps?q=${retailerData.location.lat},${retailerData.location.lng}&hl=en;z=14&amp;output=embed`}
                                // style="color:#0000FF;text-align:left"
                                target="_blank"
                            >
                                See a Larger Map
                            </a>
                        </small>
                    </div>


                </div>

                <div className="mx-auto max-w-2xl  px-4 pt-5 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{retailerData.name}'s  Products</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.product?.map((product) => <Product key={product._id} product={product} retailer={retailerData} />)}
                    </div>
                </div>
            </div>
        </>
    )
}


export const getStaticPaths = async () => {
    const query = `*[_type == "retailer"] {
      slug {
        current
      }
    }`;
    const retailers = await client.fetch(query);

    const paths = retailers.map((retailer) => ({

        params: {
            slug: retailer.slug.current,
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "retailer" && slug.current == '${slug}'][0]`;
    const productsQuery = `*[_type == 'retailer' && slug.current == '${slug}'][0] {...,"product": *[_type == 'product' && references(^._id)]}`
    // const productsQuery = '* [_type == "product" && categories._ref in *[_type=="category"]._id]{...}'
    // Grab all product data from the sanity dashboard; 
    //will pre-render page at build time using props returned from getStaticProps
    const retailerData = await client.fetch(query);//Category Data
    const products = await client.fetch(productsQuery);//Products Query 

    return {
        props: { products, retailerData }
    }
}



export default categorySlug