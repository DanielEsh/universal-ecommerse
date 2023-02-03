'use client'

import { useGetAllBrands } from '@/src/shared/api/brands/queries'
import { BrandsTable } from '@/src/entities/brands'

export default function BrandsPage() {
  const { isLoading, data: brands } = useGetAllBrands()

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      {!isLoading && brands && <BrandsTable brands={brands} />}
    </div>
  )
}
