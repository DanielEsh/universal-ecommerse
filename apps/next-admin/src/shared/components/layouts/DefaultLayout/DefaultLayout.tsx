import { PropsWithChildren } from 'react'
import { Sidebar } from '@/src/shared/components/common/components/sidebar/Sidebar'
import { Header } from '@/src/shared/components/common/components/header/Header'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="content">
        <Header />

        <div className="mt-[64px] bg-stone-900 p-6 text-white">{children}</div>
      </div>
    </div>
  )
}
