'use client'

import { useGetAllBrands } from '@/src/shared/api/brands/queries'
import { DataTable } from '@/src/shared/components/common/components/DataTable'

export default function BrandsPage() {
  const { isLoading, data: brands } = useGetAllBrands()

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      {!isLoading && brands && <div>{JSON.stringify(brands)}</div>}

      <DataTable />
    </div>
  )
}
