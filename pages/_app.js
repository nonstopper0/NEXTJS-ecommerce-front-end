import '../styles/globals.scss'
import '../styles/product.scss'
import '../styles/footer.scss'
import '../styles/nav.scss'
import '../styles/login.scss'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { AuthProvider } from '../functions/Auth'
import React from 'react'


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
    </AuthProvider>
  )
}

export default MyApp
