import { $axios } from '@/src/shared/lib/axios'
import { Brand } from '@/src/entities/brands'

export const getAllBrands = async () => {
  const { data } = await $axios.get<Brand[]>('/brands')
  return data
}
