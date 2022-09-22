import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'
import { useStateContext } from '../../context/StateContext'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

const ProductDetails = ({ product, products, categoryData, retailerData }) => {
    const { image, name, details, price, } = product
    // const { title, } = categoryData.categories

    const [index, setIndex] = useState(0)
    const { decQty, incQty, qty, onAdd } = useStateContext()

    // console.log(details)

    // console.log(categories);
    // console.log(title)
    // console.log(retailerData)



    return (
        <div className='bg-white'>
            <div className='pt-6'>
                {/* Image gallery */}
                <div className=''>
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                src={urlFor(image[0])}
                                //   alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <img
                                    src={urlFor(image[1])}
                                    // alt={product.images[1].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <img
                                    src={urlFor(image[2])}
                                    // alt={product.images[2].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                        {image[3] &&
                            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                                <img
                                    src={urlFor(image[3])}
                                    //   alt={product.images[3].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        }
                    </div>
                </div>

                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Title & Description and details */}
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
                        <div className='flex justify-between '>
                            <div className='flex align-middle '>
                                <div className='flex pt-1 pr-1'>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                </div>
                                <p>(20)</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-light text-gray-900 inline">Marker:</h3>
                                <Link href={`/retailer/${retailerData.retailer.slug.current}`}><a className='text-sm font-bold text-gray-900 inline'>{retailerData.retailer.name}</a></Link>
                            </div>
                            <div>
                                <h3 className="text-sm font-light text-gray-900 inline">Category:</h3>
                                <Link href={`/category/${categoryData.categories.slug.current}`}><a className='text-sm font-bold text-gray-900 inline'>{categoryData.categories.title}</a></Link>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <h3 className="text-sm font-medium text-gray-900">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{details}</p>
                            </div>
                        </div>

                        {/* <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{details}</p>
                            </div>

                        </div>
                    </div>

                    <div className=''>
                        <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>${price}</p>
                        <h3 className='text-sm font-medium text-gray-900 mt-4'>Quantity:</h3>

                        <div className="inline-flex rounded-md shadow-sm mt-1">
                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white' onClick={decQty}><AiOutlineMinus /></div>
                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white' >{qty}</div>
                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white' onClick={incQty}><AiOutlinePlus /></div>
                        </div>

                        <div className='mt-5'>
                            <button type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => onAdd(product, qty)}> Add to Cart</button>
                            {/* <button type='button' className='buy-now' onClick=""></button> */}
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Buy Now
                                </span>
                            </button>

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




                {/* <div className='product-detail-container'>
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
             */}

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
    // const categoryQuery = "*[_type == 'category']{slug,title,'id':*[defined(categories) && _type == 'product' && references(^._id)][0]{_id}}[defined(id)]"
    const categoryQuery = `*[_type == "product" && slug.current == '${slug}'][0] {categories->}`
    const categoryData = await client.fetch(categoryQuery);

    const retailerQuery = `*[_type == "product" && slug.current == '${slug}'][0] {retailer->}`
    const retailerData = await client.fetch(retailerQuery);

    return {
        props: { products, product, categoryData, retailerData }
    }
}

export default ProductDetails