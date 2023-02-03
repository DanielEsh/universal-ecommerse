'use client'

import { useGetAllBrands } from '@/src/shared/api/brands/queries'

export default function BrandsPage() {
  const { isLoading, data: brands } = useGetAllBrands()

  const renderBrands = () => (
    <div>
      {brands?.map((brand) => (
        <div key={brand.id}>{brand.name}</div>
      ))}
    </div>
  )

  return <div>{isLoading ? <div>Loading...</div> : renderBrands()}</div>
}
