import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'
import { useStateContext } from '../../context/StateContext'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

const ProductDetails = ({ product, products, categoryData, retailerData }) => {
    const { image, name, details, price, } = product

    const [index, setIndex] = useState(0)
    const { decQty, incQty, qty, onAdd } = useStateContext()

    return (
        <div className='bg-white'>
            <div className='md:pt-6'>
                {/* Image gallery */}
                <div className=''>
                    <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className=" aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
                            <img
                                src={urlFor(image[0])}
                                //   alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="pt-5 lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <img
                                    src={urlFor(image[1])}
                                    // alt={product.images[1].alt}
                                    className="max-h-60 w-full object-cover object-center rounded-lg"
                                />
                            </div>
                            <div className="pt-5 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <img
                                    src={urlFor(image[2])}
                                    // alt={product.images[2].alt}
                                    className="max-h-80 w-full object-cover object-center rounded-lg"
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

                <div className="flex flex-col mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-16">
                    <div className="md:order-1 order-2 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Title & Description and details */}
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
                        <div className='flex flex-wrap justify-between '>
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
                                <h3 className="text-base font-light text-gray-900 inline">Marker: </h3>
                                <Link href={`/retailer/${retailerData.retailer.slug.current}`}><a className='text-base font-bold text-gray-900 inline'>{retailerData.retailer.name}</a></Link>
                            </div>
                            <div>
                                <h3 className="text-base font-light text-gray-900 inline">Category: </h3>
                                <Link href={`/category/${categoryData.categories.slug.current}`}><a className='text-base font-bold text-gray-900 inline'>{categoryData.categories.title}</a></Link>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <h3 className="text-base font-medium text-gray-900">Description</h3>

                            <div className="space-y-6">
                                <p className="text-sm text-gray-900">{details}</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            {/* <h2 className="text-sm font-medium text-gray-900">Maker</h2> */}
                            <div className="">
                                <div style={{
                                    // backgroundImage: `url(${urlFor(retailerData.retailer.banner)})`, backgroundPosition: 'center',
                                    // backgroundSize: 'cover',
                                    // backgroundRepeat: 'no-repeat',
                                }} className="">
                                    <div>
                                        <div className=' flex items-center'>
                                            <Link href={`/retailer/${retailerData.retailer.slug.current}`}>
                                                <img className="w-40 h-40 object-cover rounded-full" src={urlFor(retailerData.retailer.image)} alt="image description"></img>
                                            </Link>
                                            <div className='max-w-xl pl-10'>
                                                <h2 className='text-2xl font-bold text-gray-900 sm:text-2xl'>{retailerData.retailer.name}</h2>
                                                <h3 className='text-lg font-light tracking-tight text-gray-900 sm:text-lg'>From British Columbia</h3>
                                                <p className="text-base text-gray-900 md:pr-20">{retailerData.retailer.shortDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='md:order-2 order-1'>
                        <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>${price}</p>
                        <h3 className='text-base font-medium text-gray-900 mt-4'>Quantity:</h3>

                        <div className="inline-flex rounded-md shadow-sm mt-1">
                            <div className='py-2 px-4 text-lg font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ' onClick={decQty}><AiOutlineMinus /></div>
                            <div className='py-2 px-4 text-base font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ' >{qty}</div>
                            <div className='py-2 px-4 text-lg font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ' onClick={incQty}><AiOutlinePlus /></div>
                        </div>
                        <span className=' block w-32 bg-red-100 text-red-800 text-xs font-semibold mr-2 px-1 py-0.5 rounded'>Only <span className=''>14</span> Units Left!</span>

                        <div className='mt-5 flex flex-wrap '>
                            <div className='w-full'>
                                <button type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-5 mb-2' onClick={() => onAdd(product, qty)}> Add to Cart</button>
                                {/* <button type='button' className='buy-now' onClick=""></button> */}
                                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-5 mb-2">
                                    {/* <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> */}
                                    Buy Now
                                    {/* </span> */}
                                </button>
                            </div>
                        </div>
                        <div className='w-full'>
                            <h3 className='text-base font-medium text-gray-900 mt-4 mb-2'>Visit {retailerData.retailer.name}'s Store Locally:</h3>
                            <iframe
                                width="100%"
                                height="170"
                                className='rounded-md'
                                // frameborder="0"
                                scrolling="no"
                                // marginheight="0"
                                // marginwidth="0"
                                src={`https://maps.google.com/maps?q=${retailerData.retailer.location.lat},${retailerData.retailer.location.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                            >
                            </iframe>
                            <small>
                                <a
                                    href={`https://maps.google.com/maps?q=${retailerData.retailer.location.lat},${retailerData.retailer.location.lng}&hl=en;z=14&amp;output=embed`}
                                    // style="color:#0000FF;text-align:left"
                                    target="_blank"
                                >
                                    See a Larger Map
                                </a>
                            </small>
                        </div>
                    </div>

                </div>

                <div className="mx-auto max-w-2xl  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products You May Also Like</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products?.slice(3, 7).map((product) => <Product key={product._id} product={product} />)}
                    </div>
                </div>
            </div>
        </div >

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
    // const categoryQuery = "*[_type == 'category']{slug, title, 'id':*[defined(categories) && _type == 'product' && references(^._id)][0]{_id}}[defined(id)]"
    const categoryQuery = `*[_type == "product" && slug.current == '${slug}'][0] {categories ->}`
    const categoryData = await client.fetch(categoryQuery);

    const retailerQuery = `*[_type == "product" && slug.current == '${slug}'][0] {retailer ->}`
    const retailerData = await client.fetch(retailerQuery);

    return {
        props: { products, product, categoryData, retailerData }
    }
}

export default ProductDetails