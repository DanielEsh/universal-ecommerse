import { $axios } from '@/src/shared/lib/axios'

export const getCurrentUser = async () => {
    return await $axios.get('/test');
}