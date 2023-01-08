import { PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import { Sidebar } from '@/src/widgets/sidebar/Sidebar'
import { useMainStore } from '@/src/shared/model'
import { Header } from '@/src/widgets/header/Header'
import { Footer } from '@/src/widgets/footer/Footer'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const sideBarIsToggled = useMainStore()

  const contentClasses = clsx('content bg-surface-500 dark:text-white', {
    toggled: !sideBarIsToggled,
  })

  return (
    <div className="flex">
      <Sidebar />
      <div className={contentClasses}>
        <Header />
        <div className="mt-[64px] p-6 text-black">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
