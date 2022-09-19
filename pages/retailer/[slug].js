import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'

function categorySlug({ products, retailerData }) {
    console.log(retailerData)
    console.log(products)

    return (
        <div>
            <h1>Retailer</h1>
            <div className='products-container'>
                {products.product?.map((product) => <Product key={product._id} product={product} />)}
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