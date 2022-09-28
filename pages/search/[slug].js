import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Product, SearchBar } from '../../components'

function SearchSlug({ queryData, slug }) {

    return (
        <div className='mt-5'>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <SearchBar />
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">Search Result For "{slug}"</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {queryData?.map((product) => <Product key={product._id} product={product} />)}
                </div>
            </div>
        </div>
    )
}


export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }`;
    const products = await client.fetch(query);

    const paths = products.map((product) => ({

        params: {
            slug: product.slug.current,
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const query = `*[name match '${slug}']`;

    // const productsQuery = `*[_type == 'category' && slug.current == '${slug}'][0] {...,"product": *[_type == 'product' && references(^._id)]}`
    const productsQuery = '* [_type == "product"]'
    // Grab all product data from the sanity dashboard; 
    //will pre-render page at build time using props returned from getStaticProps
    const queryData = await client.fetch(query);//Category Data
    const products = await client.fetch(productsQuery);//Products Query 

    return {
        props: { queryData, products, slug }
    }
}



export default SearchSlug