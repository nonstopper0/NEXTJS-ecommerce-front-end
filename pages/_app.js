import '../styles/globals.scss'
import '../styles/product.scss'
import '../styles/footer.scss'
import '../styles/nav.scss'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <h1>Nathaniel Redmon</h1>
        <section>
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
        </section>
      </nav>

      <Component {...pageProps} />

      <footer>
        <p>Copyright Nathaniel Redmon 2020.</p>

      </footer>
    </>
  )
}

export default MyApp
