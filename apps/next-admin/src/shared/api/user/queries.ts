import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '@/src/shared/api/user'

export const useFetchCurrentUser = () => {
  return useQuery({ queryKey: ['currentUSer'], queryFn: getCurrentUser })
}
