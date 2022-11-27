import axios from 'axios';

console.log(`Environment: ${process.env.NODE_ENV}`)

export const $axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {'content-type': 'application/json'},
})