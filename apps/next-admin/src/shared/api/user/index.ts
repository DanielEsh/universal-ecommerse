import { $axios } from '@/src/shared/lib/axios'

export const getCurrentUser = async () => {
    const {data} =  await $axios.get('https://my.backend/book');
    return data
}