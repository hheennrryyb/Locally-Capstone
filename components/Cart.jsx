import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { ShoppingBagIcon, XCircleIcon } from '@heroicons/react/24/solid'
import toast from 'react-hot-toast'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();


    return (
        <div className='cart-wrapper' ref={cartRef}>
            <div className='cart-container'>
                <button
                    type='button'
                    className='cart-heading'
                    onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className=''>Your Cart</span>
                    <span className=''>({totalQuantities} items)</span>
                </button>

                {cartItems.length < 1 && (
                    <div className='empty-cart'>
                        <AiOutlineShopping size={5} />
                        <h3>Your shopping bag is empty</h3>
                        <Link href="/">
                            <button
                                type='button'
                                onClick={() => setShowCart(false)}
                                className='w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className='product-container'>
                    {cartItems.length >= 1 && cartItems.map((item, index) => (
                        <div className='product' key={item._id}>
                            <img src={urlFor(item?.image[0])}
                                className='cart-product-image' />
                            <div className='item-desc'>
                                <div className=''>
                                    <h5 className='text-lg'>{item.name}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className=''>
                                    <div>
                                        <div className='inline-flex rounded-md shadow-sm mt-1'>
                                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></div>
                                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ' onClick="">{item.quantity}</div>
                                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></div>
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className='remove-item'
                                        onClick={() => onRemove(item)}>
                                        <TiDeleteOutline />
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {cartItems.length >= 1 && (
                    <div className='cart-bottom'>
                        <div className='total'>
                            <h3>Subtotal:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className='btn-container'>
                            <button
                                type='button'
                                className='w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 '
                                onClick="">
                                Checkout
                            </button>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart