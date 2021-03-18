import '../styles/globals.scss'
import '../styles/product.scss'
import '../styles/footer.scss'
import '../styles/nav.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { AuthProvider, AuthContext } from '../functions/Auth'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { user }  = useContext(AuthContext)


  return (
    <AuthProvider>
      <nav>
        <h1>Nathaniel Redmon</h1>
        <section>
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          { user ? (
          <Link href="/account">
            {user.email}
          </Link> 
          ) : (
          <Link href="/login">
            Login
          </Link>
          )}
        </section>
      </nav>

      <Component {...pageProps} />

      <footer>
        <p>Copyright Nathaniel Redmon 2020.</p>
      </footer>
    </AuthProvider>
  )
}

export default MyApp
