import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Router, { withRouter } from 'next/router'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
    let [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState()


    function closeSearchModal() {
        setIsOpen(false)
    }

    function openSearchModal() {
        setIsOpen(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Router.push(`/search/${query}`)
        closeSearchModal()

    };
    const handleInputChange = (event, setStateFunc) => {
        setStateFunc(event.target.value);
    }

    return (
        <>
            {/* <div className="fixed inset-0 flex items-center justify-center"> */}
            <button
                type="button"
                onClick={openSearchModal}
                className=" hover:text-sky-400 ml-4"
            >
                <MagnifyingGlassIcon
                    className="h-6 w-6 flex-shrink-0 text-black-400 group-hover:text-black-500"

                />
            </button>
            {/* </div> */}

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeSearchModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {/* <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Search
                                    </Dialog.Title> */}

                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                                        <div className="relative">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            </div>
                                            <input onChange={e => handleInputChange(e, setQuery)} type="text" name='search' id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500  " placeholder="Search for Products" required="" />
                                            <button className="text-white absolute right-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                                        </div>
                                    </form>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                                            onClick={closeSearchModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}