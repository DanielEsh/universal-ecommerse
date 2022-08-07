import React from 'react'
import Link from 'next/link'
import { SignInForm } from '../../components/SignInForm'
import { Input } from '../../components/ui/Input'


const Auth = () => {
    return (
        <div>
            <div>
                Auth Page
                
            </div>

            <div>
                <Input defaultValue="123" />
            </div>


            <Link href="/">
                <a>to HOME</a>
            </Link>

            <SignInForm />
        </div>
    )
}

export default Auth