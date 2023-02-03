import { useQuery } from '@tanstack/react-query'
import { getAllBrands } from '@/src/shared/api/brands'

export const useGetAllBrands = () => {
  return useQuery({ queryKey: ['allBrands'], queryFn: getAllBrands })
}
