import Head from 'next/head'
import { useContext, useState } from 'react'
import { AuthContext } from '../functions/Auth'


function login() {
    const [email, setEmail] = useState("")
    const { login } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email)
    }

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login page to purchase product" />
            </Head>
            <section className="login">
                <h2>Sign In</h2>
                <form>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                    <button onClick={handleSubmit}>Login</button>
                </form>
            </section>
        </>
    )
}

export default login
