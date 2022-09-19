import React from 'react';
import { Layout } from '../components';
import '../styles/globals.css'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext> {/* passing data from stateContext to all other components */}
      <Layout>
        <Toaster />
        {/* //Layout will access Component through children prop */}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
