import Link from 'next/link'

export const BrandsTableHeader = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl">Бренды</h1>
      <Link href="/brands/create">Добавить +</Link>
    </div>
  )
}
