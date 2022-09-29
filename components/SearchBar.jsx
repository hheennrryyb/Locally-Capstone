import React from 'react'
import { Fragment, useState } from 'react'
import Router, { withRouter } from 'next/router'

function SearchBar() {
    const [query, setQuery] = useState()
    const handleSubmit = (event) => {
        event.preventDefault();
        Router.push(`/search/${query}`)

    };
    const handleInputChange = (event, setStateFunc) => {
        setStateFunc(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={e => handleInputChange(e, setQuery)} type="text" name='search' id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500  " placeholder="Search for Products" required="" />
                    <button className="text-white absolute right-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar