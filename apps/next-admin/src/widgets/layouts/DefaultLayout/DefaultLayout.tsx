'use client'

import { PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import { Sidebar } from '@/src/widgets/sidebar/Sidebar'
import { useMainStore } from '@/src/shared/model'
import { Header } from '@/src/widgets/header/Header'
import { Footer } from '@/src/widgets/footer/Footer'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const sideBarIsToggled = useMainStore()

  const contentClasses = clsx('content h-full bg-surface-500 dark:text-white', {
    toggled: !sideBarIsToggled,
  })

  return (
    <div className="default-layout flex h-full">
      <Sidebar />
      <div className={contentClasses}>
        <Header />
        <div className="page mt-[64px] p-6 text-black dark:text-white">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
