'use client'

import { BaseModal } from 'ui'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'

import { useCreateBrandMutation } from '@/src/shared/api/brands/queries'

export default function CreateBrandPage() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleSuccessCreateBrand = () => {
    router.push('/brands')
    queryClient.refetchQueries({ queryKey: ['allBrands'] })
  }

  const { mutate } = useCreateBrandMutation(handleSuccessCreateBrand)

  const handleCreateBrand = () => {
    mutate({
      id: 6,
      slug: 'createdBrand',
      name: 'createdBrand',
      goodsCount: 0,
    })
  }

  return (
    <BaseModal
      isOpen={true}
      onExit={() => {
        router.push('/brands')
      }}>
      <div className="-translate-1/2 rounde absolute top-1/2 left-1/2 h-28">
        <div>CreateModal</div>
        <div>
          <button onClick={handleCreateBrand}>Create Brand</button>
        </div>
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
