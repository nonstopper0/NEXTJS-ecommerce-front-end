import Head from 'next/head'
import Link from 'next/link'
import { fromImgToUrl, twoDecimals, API_URL } from '../functions/functions'


export default function Home({ products }) {
  console.log(fromImgToUrl(products[0].image))
  return (
    <>
      <Head>
        <title>Nathaniel Redmon</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi" rel="stylesheet"/>
      </Head>

      <div className="products">
        { products.map((product) => 
        <div key={product.slug} className="wrapper">
          <div className="product-img" style={{backgroundImage: `url("${fromImgToUrl(product.image)}")`}}></div>
          <div className="product-info">
            <div className="product-text">
              <h3>{product.name}</h3>
              <h4>by Nathaniel Redmon</h4>
            </div>
            <div className="product-price">
              <p><span>{product.sizes["Small"].price}-{product.sizes["Large"].price}</span>$</p>
              <Link href={`products/${product.slug}`}><button type="button">View Product</button></Link>
            </div>
          </div>
        </div>
        )}
      </div>

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