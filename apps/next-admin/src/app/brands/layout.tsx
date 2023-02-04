'use client'

import { useGetAllBrands } from '@/src/shared/api/brands/queries'
import { BrandsTable } from '@/src/entities/brands'
import { PropsWithChildren } from 'react'

export default function BrandsLayout({ children }: PropsWithChildren) {
  const { isLoading, data: brands } = useGetAllBrands()

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      {!isLoading && brands && <BrandsTable brands={brands} />}

      <>{children}</>
    </div>
  )
}
