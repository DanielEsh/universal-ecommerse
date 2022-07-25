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


http.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401) {
        console.log('Просрочен accessToken');
        const token = localStorage.getItem('refreshToken');

        const access_token = http.post('auth/refresh', {}, { headers: { 'Authorization': `Bearer ${token}` }})
            .then(response => {
                localStorage.setItem('accessToken', response.data.accessToken);
            })
            .catch(console.log);

        return http(originalRequest);
    }
    return Promise.reject(error);
});
