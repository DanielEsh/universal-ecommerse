import { useRef } from "react";

import {signIn} from "../service/auth.service";

export const SignInForm = () => {

    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

    // @ts-ignore
    const onSubmit = async (event) => {
        event.preventDefault();

       await onLoggin({
            email: emailRef.current.value,
            password: passwordRef.current.value
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
        <form onSubmit={onSubmit}>
            <div>
                Name
                <input type="text" ref={emailRef} value="elon@gmail.com"/>
            </div>
            <div>
                password
                <input type="text" ref={passwordRef} value="12345678"/>
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    )
}
