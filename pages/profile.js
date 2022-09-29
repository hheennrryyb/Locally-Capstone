import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { client } from '../lib/client'
import { urlFor } from '../lib/client'

export default function Profile({ products }) {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user && (
            <div className='m-auto max-w-7xl flex flex-wrap mt-14'>
                <div className='lg:w-1/4 '>
                    <aside className="lg:w-64 w-full">
                        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded ">
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                                        <svg className="w-6 h-6 text-gray-500 transition duration-75 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                        <span className="ml-3">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Account</span>

                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
                                        <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-sky-600 bg-sky-200 rounded-full ">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Newsletters</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Billing</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                </div>

                <div className='lg:w-3/4 m-auto'>
                    <div className='flex bg-gray-50 rounded-md w-full'>

                        <img src={user.picture} alt={user.name} />
                        <div className='ml-5'>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            <button className=' h-10 text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '>Edit Account</button>
                        </div>
                    </div>

                    <h2 className='mt-10 mb-2 text-xl'>Order History</h2>

                    <div className='bg-gray-50 rounded-md p-5'>
                        <div className='flex'>
                            {products.slice(1, 5).map((product) => {
                                return (
                                    <div key={product._id} className=" mr-5 mb-5 ">
                                        <img
                                            src={urlFor(product.image && product.image[0])}
                                            //   alt={product.imageAlt}
                                            className="h-32 w-32 object-cover rounded-full"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p>Order Number</p>
                                <p>775747287</p>
                            </div>
                            <div className='ml-7'>
                                <p>Shipped Date</p>
                                <p>22nd Sep 2022</p>
                            </div>
                            <div className='ml-7'>
                                <p>Total</p>
                                <p>$122.25</p>
                            </div>
                            <div className='ml-7'>
                                <p>Status</p>
                                <p className='text-yellow-300'>Out For Delivery</p>
                            </div>
                            <div className='ml-7 flex'>
                                <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '>Track/View Order</button>
                            </div>

                        </div>
                    </div>

                    <div className='bg-gray-50 rounded-md p-5 mt-5'>
                        <div className='flex'>
                            {products.slice(4, 7).map((product) => {
                                return (
                                    <div key={product._id} className=" mr-5 mb-5 ">
                                        <img
                                            src={urlFor(product.image && product.image[0])}
                                            //   alt={product.imageAlt}
                                            className="h-32 w-32 object-cover rounded-full"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p>Order Number</p>
                                <p>775743287</p>
                            </div>
                            <div className='ml-7'>
                                <p>Shipped Date</p>
                                <p>3rd July 2022</p>
                            </div>
                            <div className='ml-7'>
                                <p>Total</p>
                                <p>$69.75</p>
                            </div>
                            <div className='ml-7'>
                                <p>Status</p>
                                <p className='text-green-300'>Delivered</p>
                            </div>
                            <div className='ml-7 flex'>
                                <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '>Track/View Order</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        )
    )
}

export const getServerSideProps = async () => {
    // Grab all data from the sanity dashboard; 
    const query = "*[_type == 'product']";
    const products = await client.fetch(query);

    return {
        props: { products }

    }
}