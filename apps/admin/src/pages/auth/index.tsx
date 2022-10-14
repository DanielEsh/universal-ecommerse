import { Logo } from '@/src/shared/components/Logo'
import { SignInForm } from '@/src/shared/components/SignInForm'

const Auth = () => {
    return (
        <div className="flex items-center justify-center flex-col w-screen h-screen">
            <Logo />
            <SignInForm />
        </div>
    )
}

export default Auth
