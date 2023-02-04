'use client'

import { BaseModal } from 'ui'
import { useRouter } from 'next/navigation'

type PageProps = {
  params?: any
  children?: React.ReactNode
}

export default function BrandSlugPage({ params }: PageProps) {
  const router = useRouter()

  return (
    <BaseModal
      isOpen={true}
      onExit={() => {
        router.push('/brands')
      }}>
      <div className="-translate-1/2 rounde absolute top-1/2 left-1/2 h-28">
        Brand Slug {params.brandSlug} Modal
        <button
          onClick={() => {
            router.push('/brands')
          }}>
          Close
        </button>
      </div>
    </BaseModal>
  )
}
