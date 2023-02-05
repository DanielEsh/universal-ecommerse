'use client'

import { BaseModal } from 'ui'
import { useRouter, notFound } from 'next/navigation'
import { useGetBrandBySlug } from '@/src/shared/api/brands/queries'

type PageProps = {
  params?: any
  children?: React.ReactNode
}

export default function BrandSlugPage({ params }: PageProps) {
  const router = useRouter()
  const { isLoading, data: brand } = useGetBrandBySlug(params.brandSlug)

  if (!brand) notFound()

  return (
    <BaseModal
      isOpen={true}
      onExit={() => {
        router.push('/brands')
      }}>
      <div className="-translate-1/2 rounde absolute top-1/2 left-1/2 h-28">
        {isLoading && <div>Loading...</div>}

        {!isLoading && brand && <div>Brand Slug {brand.slug} Modal</div>}
        <div>
          <button
            onClick={() => {
              router.push('/brands')
            }}>
            Close
          </button>
        </div>
      </div>
    </BaseModal>
  )
}
