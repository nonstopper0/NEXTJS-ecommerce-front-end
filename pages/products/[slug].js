import Head from 'next/head'
import { useState } from 'react'
import { API_URL, fromImgToUrl, twoDecimals } from '../../functions/functions'

export default function Product({ product }) {
    const [price, setPrice] = useState(product.sizes ? twoDecimals(product.sizes["Small"].price) : product.price)
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
                <div className="row">
                    <div className="right">
                        <img src={fromImgToUrl(product.image)} />
                    </div>
                    <div className="left">
                        <div className="text">
                            <section className="top">
                                <h1>{product.name}</h1>
                                <h4>BY NATHANIEL REDMON</h4>
                                <p>${twoDecimals(price)}</p>
                            </section>
                            <section className="middle">
                                <p>
                                    {product.content}
                                </p>
                            </section>
                            <section className="sizes">
                                { product.sizes && 
                                <>
                                        <button onClick={() => setPrice((product.sizes["Small"].price))}>Small</button>
                                        <button onClick={() => setPrice((product.sizes["Medium"].price))}>Medium</button>
                                        <button onClick={() => setPrice((product.sizes["Large"].price))}>Large</button>
                                </>
                                }
                            </section>
                            <section className="buttons">
                                <button>Add to Cart</button>
                                <button>Buy Now</button>
                            </section>
                        </div>
                    </div>
                </div>
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
