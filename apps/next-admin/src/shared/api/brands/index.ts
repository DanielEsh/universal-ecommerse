import { $axios } from '@/src/shared/lib/axios'
import { Brand } from '@/src/entities/brands'

export const createBrand = async (newBrand: Brand) => {
  const { data } = await $axios.post('https://my.backend/book', {
    brand: newBrand,
  })
  return data
}

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

export const deleteBrandBySlug = async (slug: string) => {
  const { data } = await $axios.delete(`https://my.backend/book/${slug}`)
  return { data }
}
