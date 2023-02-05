import { $axios } from '@/src/shared/lib/axios'
import { Brand } from '@/src/entities/brands'

export const getAllBrands = async () => {
  const { data } = await $axios.get<Brand[]>('https://my.backend/book')
  return data
}

export const getBrandBySlug = async (brandSlug: string) => {
  const { data } = await $axios.get<Brand>(
    `https://my.backend/book/${brandSlug}`,
  )
  return data
}