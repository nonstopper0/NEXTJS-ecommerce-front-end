import Head from 'next/head'
import { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../functions/Auth'

function account() {

    const { user, logout } = useContext(AuthContext)

    if (!user) {
        return (
            <div>
                <p>Please login</p>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Account Page</title>\
                <meta name="description" content="This is the account page, You can do all things related to changing account info here"/>
            </Head>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export default account
