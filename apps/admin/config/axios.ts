import axios from 'axios';

console.log(`Environment: ${process.env.NODE_ENV}`)

export const $axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    withCredentials: true,
    headers: {'content-type': 'application/json'},
})

// $axios.interceptors.request.use(
//     (config) => {
//         const ACCESS_TOKEN = localStorage.getItem('accessToken');

//         if (ACCESS_TOKEN && config.url !== 'auth/refresh') {
//             // @ts-ignore
//             config.headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// $axios.interceptors.response.use((config) => {
//     return config;
// },async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status == 401 && error.config && !error.config._retry) {
//         originalRequest._retry = true;
//         try {
//             const token = localStorage.getItem('refreshToken');
//             const response = await $axios.post('auth/refresh', {}, { headers: { 'Authorization': `Bearer ${token}` }})
//             localStorage.setItem('accessToken', response.data.accessToken)
//             return $axios.request(originalRequest);
//         } catch (e) {
//             console.log('НЕ АВТОРИЗОВАН')
//             throw error;
//         }
//     }
//     throw error;
// })
