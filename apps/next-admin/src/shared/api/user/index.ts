import { $axios } from '@/src/shared/lib/axios'

export const getCurrentUser = async () => {
    const {data} =  await $axios.get('/test');
    return data
}