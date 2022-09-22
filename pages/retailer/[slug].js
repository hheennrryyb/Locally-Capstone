import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'

function categorySlug({ products, retailerData }) {
    console.log(retailerData)
    console.log(products)

    return (
        <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24'>
            <div className="overflow-hidden rounded-lg ">
                {/* <img
                    src={urlFor(retailerData.banner)}
                    //   alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center"
                /> */}
                <div style={{
                    backgroundImage: `url(${urlFor(retailerData.banner)})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }} className="h-full w-full ">
                    <div className='bg-gradient-to-r from-blue-500 overflow-hidden rounded-lg h-full w-full p-10'>
                        <img class="w-52 h-52 object-cover rounded-full" src={urlFor(retailerData.image)} alt="image description"></img>
                        <div className='ml-5'>
                            <h2 className='text-4xl font-bold text-white sm:text-4xl'>{retailerData.name}</h2>
                            <h3 className='text-xl font-light tracking-tight text-white sm:text-xl'>From British Columbia</h3>
                        </div>

                    </div>
                </div>
            </div>


            <div className='p-10'>
                <h3 className="text-sm font-medium text-gray-900">About Me</h3>
                <div className="space-y-6">
                    <p className="text-base text-gray-900">{retailerData.description}</p>
                </div>

            </div>

            <div className='products-container'>
                {products.product?.map((product) => <Product key={product._id} product={product} retailer={retailerData} />)}
            </div>
        </div>
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