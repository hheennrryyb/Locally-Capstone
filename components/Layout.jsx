import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <div >
            <Head>
                <title>Locally</title>
                {/* <link rel="shortcut icon" href="./favicon.ico" /> */}
            </Head>
            <header className='pb-20 sm:pb-0'>
                <Navbar />
            </header>
            <main>
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