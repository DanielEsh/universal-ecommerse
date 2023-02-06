import { useQuery, useMutation } from '@tanstack/react-query'
import {
  createBrand,
  getAllBrands,
  getBrandBySlug,
  deleteBrandBySlug,
} from '@/src/shared/api/brands'
import { Brand } from '@/src/entities/brands'

export const useCreateBrandMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: (newBrand: Brand) => createBrand(newBrand),
    onSuccess,
  })
}

export const useGetAllBrands = () => {
  return useQuery({ queryKey: ['allBrands'], queryFn: getAllBrands })
}

export const useGetBrandBySlug = (slug: string, onError?: () => void) => {
  return useQuery({
    queryKey: ['todos', slug],
    queryFn: () => getBrandBySlug(slug),
    onError,
  })
}

export const useDeleteBrandBySlug = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: (slug: string) => deleteBrandBySlug(slug),
    onSuccess,
  })
}
