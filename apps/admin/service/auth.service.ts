import Router from "next/router";
import { $axios } from "../config/axios";
import { api } from "./api";

export async function signIn({ username, password }: any) {
    const { data } = await $axios.post(api.auth.signIn, { username, password })

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    Router.push('/')
}

export async function logout() {
    await $axios.post(api.auth.logout);
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');

    Router.push('/auth')
}
