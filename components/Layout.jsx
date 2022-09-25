import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <div className=''>
            <Head>
                <title>Locally</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className='main-container'>
                {/* //passing through from _app.js Components */}
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}


export default Layout