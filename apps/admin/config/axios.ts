import axios from 'axios';
import { getToken } from '../utils/cookies';

// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// export const API_URI = serverRuntimeConfig.URI || publicRuntimeConfig.URI;

console.log(`Environment: ${process.env.NODE_ENV}`)

export const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    withCredentials: true,
})

http.interceptors.request.use((request: any) => {
    if (typeof window !== 'undefined') {
        return request
    }

    const token = getToken()

    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`
    }

    return request
});
