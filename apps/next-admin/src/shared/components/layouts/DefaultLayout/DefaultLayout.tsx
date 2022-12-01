import { Sidebar } from '@/src/shared/components/common/components/sidebar/Sidebar'
import { PropsWithChildren } from 'react'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="content">
        <header className="fixed h-[64px] w-full bg-green-400">HEADER</header>

        <div className="mt-[64px] bg-stone-900 p-6 text-white">{children}</div>
      </div>
    </div>
  )
}
