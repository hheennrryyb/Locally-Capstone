import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'

function categorySlug({ products, categoryData }) {
    console.log(categoryData)
    // console.log(products.product)
    return (
        <div className='mt-5'>
            <div style={{
                backgroundImage: `url(${urlFor(categoryData.image[0])})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className="h-full w-full ">
                <div className='bg-gradient-to-r from-gray-800 overflow-hidden w-full pl-12 py-20'>
                    <div className='ml-5'>
                        <h2 className='text-4xl font-bold text-white sm:text-4xl'>{categoryData.title}</h2>
                        {/* <h3 className='text-xl font-light tracking-tight text-white sm:text-xl'>From British Columbia</h3> */}
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {products.product?.map((product) => <Product key={product._id} product={product} />)}
                </div>
            </div>
        </div>
    )
}


export const getStaticPaths = async () => {
    const query = `*[_type == "category"] {
      slug {
        current
      }
    }`;
    const categories = await client.fetch(query);

    const paths = categories.map((category) => ({

        params: {
            slug: category.slug.current,
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "category" && slug.current == '${slug}'][0]`;
    const productsQuery = `*[_type == 'category' && slug.current == '${slug}'][0] {...,"product": *[_type == 'product' && references(^._id)]}`
    // const productsQuery = '* [_type == "product" && categories._ref in *[_type=="category"]._id]{...}'
    // Grab all product data from the sanity dashboard; 
    //will pre-render page at build time using props returned from getStaticProps
    const categoryData = await client.fetch(query);//Category Data
    const products = await client.fetch(productsQuery);//Products Query 

    return {
        props: { products, categoryData }
    }
}



export default categorySlug