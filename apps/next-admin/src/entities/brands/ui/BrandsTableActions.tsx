import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'

import { useDeleteBrandBySlug } from '@/src/shared/api/brands/queries'

interface Props {
  slug: string
}

export const BrandsTableActions = ({ slug }: Props) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleViewClick = () => {
    router.push(`/brands/${slug}`)
  }

  const handleSuccessDelete = () => {
    queryClient.refetchQueries({ queryKey: ['allBrands'] })
  }

  const { mutate } = useDeleteBrandBySlug(handleSuccessDelete)

  const handleDelete = () => {
    mutate(slug)
  }

  return (
    <div className="flex gap-3">
      <button onClick={handleViewClick}>Посмотреть</button>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  )
}
