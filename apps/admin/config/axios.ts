import axios from 'axios';
import { getToken } from '../utils/cookies';

// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// export const API_URI = serverRuntimeConfig.URI || publicRuntimeConfig.URI;

console.log(`Environment: ${process.env.NODE_ENV}`)

export const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    withCredentials: true,
})

let axios_token = '';

// http.interceptors.request.use((config) => {
//     // @ts-ignore
//     config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
//     return config;
// })

http.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            console.log('Просрочен accessToken', originalRequest._isRetry);
            const token = localStorage.getItem('refreshToken');
            const response = await http.post('auth/refresh', {}, { headers: { 'Authorization': `Bearer ${token}` }})
            localStorage.setItem('accessToken', response.data.accessToken);
            console.log('TOKEN', response.data.accessToken === localStorage.getItem('accessToken'))
            return http.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})
