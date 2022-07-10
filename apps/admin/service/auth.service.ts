import Router from "next/router";
import { http } from "../config/axios";

import { clearCookies, setToken } from "../utils/cookies";

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signIn({ email, password }: any) {
    await delay()
    const { data } = await http.post(`/auth/signIn`, { email, password }, { headers: { 'content-type': 'application/json' } })
    console.log('DATA', data);
    setToken(data)
    Router.push('/')
}

export async function signUp(request: any) {
    await delay()
    request.roles = request.roles.flatMap((r) => r.code)
    return await http.post(`/auth/new`, request, { headers: { 'content-type': 'application/json' } })
}

export async function getUser(token: string): Promise<any> {
    const { data } = await http.get(`/auth/profile`, { headers: { 'Authorization': `Bearer ${token}` } })
    const user: any = {
        id: data.sub,
        name: data.username
    }
    return user
}

export async function logout() {
    const {data} = await http.get('/auth/logout');

    console.log('logout', data);

    Router.push('/auth')
}
