import Head from 'next/head'
import Link from 'next/link'
import { fromImgToUrl, twoDecimals, API_URL } from '../functions/functions'


export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Nathaniel Redmon</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi" rel="stylesheet"/>
      </Head>

      { products.map((product) => 
      <div className="wrapper">
        <div className="product-img">
          <img src={fromImgToUrl(product.image)}/>
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{product.name}</h1>
            <h2>by Nathaniel Redmon</h2>
            <p>{product.content}</p>
          </div>
          <div className="product-price-btn">
            <p><span>{product.price}</span>$</p>
            <Link href={`products/${product.slug}`}><button type="button">buy now</button></Link>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/products/`)
  const resJson = await response.json()

  return {
    props: {
      products: resJson,
    }
  }
}