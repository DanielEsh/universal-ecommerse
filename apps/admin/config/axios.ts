import axios from 'axios';
import { getToken } from '../utils/cookies';

export const canUseDom = (): boolean => {
    return (
        typeof window !== 'undefined' &&
        typeof window.document !== 'undefined' &&
        typeof window.document.createElement !== 'undefined'
    );
};

// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// export const API_URI = serverRuntimeConfig.URI || publicRuntimeConfig.URI;

console.log(`Environment: ${process.env.NODE_ENV}`)

export const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    withCredentials: true,
})

let axios_token = '';
let AT: string | null

if (canUseDom()) {
    AT = localStorage.getItem('accessToken');
}

http.interceptors.request.use(
    (config) => {
        if (AT && config.url !== 'auth/refresh') {
            console.log('AT', config);
            console.log('TKEN', localStorage.getItem('accessToken'))
            // @ts-ignore
            config.headers["Authorization"] = 'Bearer ' + AT;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._retry) {
        originalRequest._retry = true;
        try {
            console.log('ПРОСРОЧЕН ACCESS_TOKEN');
            const token = localStorage.getItem('refreshToken');
            const response = await http.post('auth/refresh', {}, { headers: { 'Authorization': `Bearer ${token}` }})
            AT = response.data.accessToken;
            console.log('NEW TOKEN', response.data.accessToken === AT)
            return http.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
            throw error;
        }
    }
    throw error;
})
