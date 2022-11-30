'use client'

import { useState } from 'react'
import { BaseModal } from 'ui'
import { useRouter } from 'next/navigation'

export default function ModalPage() {
  const [modal, setModal] = useState(true)

  const router = useRouter()

  return (
    <BaseModal
      isOpen={modal}
      onExit={() => {
        setModal(false)
        router.push('/layouts')
      }}>
      <div className="-translate-1/2 absolute top-1/2 left-1/2 h-28 rounded bg-white">
        Modal
        <button
          onClick={() => {
            setModal(false)
            router.push('/layouts')
          }}>
          Close
        </button>
      </div>
    </BaseModal>
  )
}
