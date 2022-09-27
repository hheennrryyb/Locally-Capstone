import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'

function categorySlug({ products, retailerData }) {
    console.log(retailerData)
    console.log(products)

    return (
        <>
            <div className=" mt-10 ">
                <div style={{
                    backgroundImage: `url(${urlFor(retailerData.banner)})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }} className="">
                    <div className='bg-gradient-to-r from-white'>
                        <div className='lg:max-w-6xl m-auto py-10 flex items-center'>

                            <img class="w-52 h-52 object-cover rounded-full " src={urlFor(retailerData.image)} alt="image description"></img>
                            <div className='pl-10'>
                                <h2 className='text-4xl font-bold text-gray-900 sm:text-4xl'>{retailerData.name}</h2>
                                <h3 className='text-xl font-light tracking-tight text-gray-900 sm:text-xl'>From British Columbia</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24'>


                <div className='p-10'>
                    <h3 className="text-sm font-medium text-gray-900">About Me</h3>
                    <div className="space-y-6">
                        <p className="text-base text-gray-900">{retailerData.description}</p>
                    </div>

                </div>

                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
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