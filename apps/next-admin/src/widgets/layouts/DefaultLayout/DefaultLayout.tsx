import { PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import { Sidebar } from '@/src/widgets/sidebar/Sidebar'
import { useSidebar } from '@/src/shared/model'
import { Header } from '@/src/widgets/header/Header'
import { Footer } from '@/src/widgets/footer/Footer'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const sidebarToggled = useSidebar()

  const contentClasses = clsx('content', {
    toggled: !sidebarToggled,
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
