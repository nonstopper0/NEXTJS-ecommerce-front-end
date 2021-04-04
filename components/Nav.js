import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../functions/Auth'

function nav() {
    const router = useRouter()
    const { user }  = useContext(AuthContext)
  
    return (
        <nav>
            <h1>NATHANIEL REDMON</h1>
            <section>
                <Link href="/">Home</Link>
                <Link href="/">Products</Link>
                { user ? (
                <Link href="/account">
                    Account
                </Link> 
                ) : (
                <Link href="/login">
                    Login
                </Link>
                )}
            </section>
        </nav>
    )
}

export default nav
