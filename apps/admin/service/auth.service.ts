import Router from "next/router";
import { $axios } from "../config/axios";
import { getCookie } from '../utils/cookies';

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signIn({ username, password }: any) {
    await delay()
    const { data } = await $axios.post(`/auth/signIn`, { username, password }, { headers: { 'content-type': 'application/json' } })

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    Router.push('/')
}

export async function signUp(request: any) {
    await delay()
    request.roles = request.roles.flatMap((r) => r.code)
    return await $axios.post(`/auth/new`, request, { headers: { 'content-type': 'application/json' } })
}

export async function getUser(): Promise<any> {
    const token = localStorage.getItem('accessToken');
    console.log('TOKEN req', token);
    const { data } = await $axios.get(`/user/`)
    return data;
}

export async function logout() {
    const token = localStorage.getItem('accessToken');
    console.log('TOKEN', token);
    const {data} = await $axios.post('/auth/logout', {},{ headers: { 'Authorization': `Bearer ${token}` }});

    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    console.log('logout', data);

    Router.push('/auth')
}
