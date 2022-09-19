import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'
import { useStateContext } from '../../context/StateContext'
import Link from 'next/link'

const ProductDetails = ({ product, products, categoryData, retailerData }) => {
    const { image, name, details, price, categories, retailer } = product


    const [index, setIndex] = useState(0)
    const { decQty, incQty, qty, onAdd } = useStateContext()

    // console.log(details)

    // console.log(categories);
    console.log(categoryData[0])
    console.log(retailerData[0].title)



    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image && image[index])}
                            className="product-detail-image"
                        />

                    </div>
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}//hover and display item

                            />
                        ))}

                    </div>
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details:</h4>
                    <p>{details}</p>
                    <h4>Retailer:</h4>
                    <Link href={`/retailer/${retailerData[0].slug.current}`}><a>{retailerData[0].title}</a></Link>
                    <h4>Category:</h4>
                    <Link href={`/category/${categoryData[0].slug.current}`}><a>{categoryData[0].title}</a></Link>

                    <p className='price'>${price}</p>
                    <div className='quantity'>
                        <h3>Quantity:</h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='num' onClick="">{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}> Add to Cart</button>
                        <button type='button' className='buy-now' onClick="">Buy Now</button>

                    </div>
                </div>

            </div>
            <div className='maylike-products-wrapper'>
                <h2>You May Also Like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item) =>
                            (<Product key={item._id} product={item} />)
                        )}
                    </div>

                </div>

            </div>

        </div>
    )
}

// return current slug property for the item; Use staticPaths and getStatcProps together for dynamic SSG pages, 
//Props were missing /products/[slug]
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}


export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    // Grab all product data from the sanity dashboard; 
    //will pre-render page at build time using props returned from getStaticProps
    const product = await client.fetch(query);//Single product
    const products = await client.fetch(productsQuery);//Products Query 

    // const categoryQuery = '* [_type == "product" && categories._ref in *[_type=="category"]._id]{...}';
    const categoryQuery = "*[_type == 'category']{slug,title,'id':*[defined(categories) && _type == 'product' && references(^._id)][0]{_id}}[defined(id)]"
    const categoryData = await client.fetch(categoryQuery);

    const retailerQuery = "*[_type == 'retailer']{slug,title,'id':*[defined(retailer) && _type == 'product' && references(^._id)][0]{_id}}[defined(id)]"
    const retailerData = await client.fetch(retailerQuery);

    return {
        props: { products, product, categoryData, retailerData }
    }
}

export default ProductDetails