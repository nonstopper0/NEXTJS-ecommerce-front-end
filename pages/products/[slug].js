import Head from 'next/head'
import { fromImgToUrl, twoDecimals } from '../../functions/functions'
import products from '../../products.json'
const product = products[0]

export default function Product() {
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
            <div>
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

