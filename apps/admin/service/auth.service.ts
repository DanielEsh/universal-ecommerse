import Router from "next/router";
import { $axios } from "../config/axios";

export async function signIn({ username, password }: any) {
    const { data } = await $axios.post(`/auth/signIn`, { username, password })

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    Router.push('/')
}

export async function logout() {
    await $axios.post('/auth/logout');
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');

    Router.push('/auth')
}
