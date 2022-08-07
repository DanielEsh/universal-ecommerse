import React from 'react'
import Link from 'next/link'
import { SignInForm } from '../../components/SignInForm'

const Auth = () => {
    return (
        <div>
            <div>
                Auth Page
                
            </div>


            <Link href="/">
                <a>to HOME</a>
            </Link>

            <SignInForm />
        </div>
    )
}

export default Auth