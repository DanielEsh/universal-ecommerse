import { useQuery } from '@tanstack/react-query'
import { getAllBrands, getBrandBySlug } from '@/src/shared/api/brands'

export const useGetAllBrands = () => {
  return useQuery({ queryKey: ['allBrands'], queryFn: getAllBrands })
}

export const useGetBrandBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['todos', slug],
    queryFn: () => getBrandBySlug(slug),
  })
}
