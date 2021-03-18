import Head from 'next/head'
import Link from 'next/link'
import products from '../products.json'
import { fromImgToUrl, twoDecimals } from '../functions/functions'


export default function Home() {
  return (
    <>
      <Head>
        <title>Nathaniel Redmon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      { products.map((product) => 
        <div key={product.id} className="product">

            <div className="col">
              <img src={fromImgToUrl(product.image)} />
            </div>
            <div className="col">
              <h3>{product.name} : ${twoDecimals(product.price)}</h3>
              <Link href={`/products/${product.slug}`}>View</Link>
            </div>
          </div>
      )}
    </>
  )
}
