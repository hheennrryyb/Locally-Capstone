import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { ShoppingBagIcon, XCircleIcon } from '@heroicons/react/24/solid'
import toast from 'react-hot-toast'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'


const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems)
        })
        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...')

        stripe.redirectToCheckout({ sessionId: data.id })
    }

    return (
        <div className=' show-top cart-wrapper' ref={cartRef}>
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
                                className='w-full mt-5 text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '>
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
                                    <h5 className='text-lg max-w-lg'>{item.name}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className=''>
                                    <div className=''>
                                        <div className='inline-flex rounded-md shadow-sm mt-1'>
                                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-500 focus:z-10 focus:ring-2 focus:ring-sky-500 focus:text-sky-500 ' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></div>
                                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-sky-500 focus:z-10 focus:ring-2 focus:ring-sky-500 focus:text-sky-500 ' onClick="">{item.quantity}</div>
                                            <div className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-sky-500 focus:z-10 focus:ring-2 focus:ring-sky-500 focus:text-sky-500 ' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></div>
                                        </div>
                                        <button
                                            type='button'
                                            className='remove-item text-4xl md:text-3xl ml-10'
                                            onClick={() => onRemove(item)}>
                                            <TiDeleteOutline />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {cartItems.length >= 1 && (
                    <div className='cart-bottom bg-slate-100'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl'>Subtotal:</h3>
                            <h3 className='text-xl'>${totalPrice}</h3>
                        </div>
                        <div className='btn-container'>
                            <button
                                type='button'
                                className='w-full mt-5 text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 '
                                onClick={handleCheckout}>
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