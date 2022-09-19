import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'

function categorySlug({ products, categoryData }) {
    console.log(categoryData)
    // console.log(products.product)
    return (
        <div>
            <h1>Category</h1>
            <div className='products-container'>
                {products.product?.map((product) => <Product key={product._id} product={product} />)}
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