import { useState } from "react";
import { Input } from '../components/ui/Input'
import { InputPassword } from '../components/ui/InputPassword'

import {signIn} from "../service/auth.service";

export const SignInForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // @ts-ignore
    const onSubmit = async (event) => {
        event.preventDefault();

       await onLoggin({
            username: email,
            password: password,
        })

        console.log('submit');
    }

    async function onLoggin(data: any) {
        try {
            await signIn(data)
                .then(() => {
                    console.log('then');
                })
        } catch (error: any) {
            console.error(error)
        }
    }

    return (
        <form 
            className="flex items-center justify-center flex-col gap-6 mt-6"
            onSubmit={onSubmit}
        >
            <div className="w-[500px]">
                <Input 
                    defaultValue="elon@gmail.com"
                    onChange={(value) => setEmail(value)}
                />
            </div>

            <div className="w-[500px]">
                <InputPassword 
                    defaultValue="12345678"
                    onChange={(value) => setPassword(value)}
                />
            </div>

            <button type="submit">
                Submit
            </button>
        </form>
    )
}
