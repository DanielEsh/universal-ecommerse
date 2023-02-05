'use client'

import { BaseModal } from 'ui'
import { useRouter } from 'next/navigation'

export default function NotFoundBrandBySlugPage() {
  const router = useRouter()
  return (
    <BaseModal
      isOpen={true}
      onExit={() => {
        router.push('/brands')
      }}>
      <div className="-translate-1/2 rounde absolute top-1/2 left-1/2 h-28">
        Not Found
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
