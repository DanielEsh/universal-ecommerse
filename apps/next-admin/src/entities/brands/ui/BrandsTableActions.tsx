import { useRouter } from 'next/navigation'

interface Props {
  slug: string
}

export const BrandsTableActions = ({ slug }: Props) => {
  const router = useRouter()

  const handleViewClick = () => {
    router.push(`/brands/${slug}`)
  }

  return (
    <div className="flex gap-3">
      <button onClick={handleViewClick}>Посмотреть</button>
      <button>Удалить</button>
    </div>
  )
}
