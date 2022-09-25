/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useStateContext } from '../context/StateContext'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { client } from '../lib/client'

import { AiOutlineShopping } from 'react-icons/ai'

import Logo from '../data/logo/Locally.svg'
// import Logo2 from '../data/logo/Locally.png'



import { Cart } from './'

function Navbar() {
    const { showCart, setShowCart, totalQuantities } = useStateContext()

    const navigation = [
        // { name: 'Home', href: '#', current: true },
        { name: 'Makers', href: '/retailer', current: false },
        { name: 'Maps', href: '/maps', current: false },
        { name: 'About', href: '#', current: false },
    ]
    const categoryLinks = [
        { href: '/category', label: 'All Collections' },
        { href: '/category/wedding-and-party', label: 'Wedding & Party' },
        { href: '/category/jewellery-and-accessories', label: 'Jewellery & Accessories' },
        { href: '/category/home-and-living', label: 'Home & Living' },
        { href: '/category/art-and-collectibles', label: 'Art & Collectibles' },
        { href: '/category/clothing-and-shoes', label: 'Clothing & Shoes' },
        { href: '/category/toys-and-entertainment', label: 'Toys & Entertainment' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>

            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Link href='/'>
                                            <div className="block w-28 lg:hidden">
                                                <Image
                                                    // height={50}
                                                    src={Logo}
                                                    alt="Locally"
                                                />
                                            </div>
                                        </Link>
                                        <Link href='/'>
                                            <div className="hidden w-28 lg:block md:w-40">
                                                <Image
                                                    // height={50}
                                                    src={Logo}
                                                    alt="Locally"
                                                />

                                            </div>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block lg:mt-2">
                                        <div className="flex space-x-4">

                                            <Menu>
                                                <Menu.Button className='text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Collections</Menu.Button>
                                                <Menu.Items className='absolute top-12 left-10 z-10 mt-2 w-56  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                    {categoryLinks.map((link) => (
                                                        /* Use the `active` state to conditionally style the active item. */
                                                        <Menu.Item key={link.href} as={Fragment}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={link.href}
                                                                    className={`${active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black-700'
                                                                        }`}
                                                                >
                                                                    {link.label}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Menu>
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                // src=""
                                                // alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <a onClick={() => setShowCart(true)} className="group -m-2 flex items-center p-2">
                                            <AiOutlineShopping
                                                className="h-6 w-6 flex-shrink-0 text-black-400 group-hover:text-black-500"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-2 text-sm font-medium text-black-700 group-hover:text-black-800">{totalQuantities}</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </a>
                                    </div>

                                    {/* Profile dropdown */}

                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {showCart && <Cart />}
        </>
    )
}

export const getServerSideProps = async () => {

    const NavQuery = `*[_type == "navigation"]`;
    const NavData = await client.fetch(NavQuery);

    return {
        props: { NavData }
        //Passed to top props
    }
}
export default Navbar




