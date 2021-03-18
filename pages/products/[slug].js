import Head from 'next/head'
import { API_URL, fromImgToUrl, twoDecimals } from '../../functions/functions'

export default function Product({ product }) {
    return (
        <>
            <Head>
                { product.meta_title && 
                    <title>{product.meta_title}</title>
                }
                { product.meta_description && 
                    <meta name="description" content={product.meta_description}/>
                }
            </Head>
            <div className="product-page">
                <h1>{product.name}</h1>
                <img src={fromImgToUrl(product.image)} />
                <p>${twoDecimals(product.price)}</p>
                <p>
                    {product.content}
                </p>
            </div>
        </>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const response = await fetch(`${API_URL}/products/?slug=${slug}`)
    const resJson = await response.json()
  
    return {
      props: {
        product: resJson[0],
      }
    }    
}


export async function getStaticPaths() {
    const response = await fetch(`${API_URL}/products/`)
    const products = await response.json()

    return {
        paths: products.map(product => ({
            params: { slug: String(product.slug)}
        })),
        fallback: false
    }
}
