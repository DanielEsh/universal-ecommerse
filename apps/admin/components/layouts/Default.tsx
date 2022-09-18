import { ReactNode } from 'react'
import { SideBar } from '../Sidebar'
import { Header } from '@/components/layouts/header/Header'

type DefaultLayoutProps = {
    children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className="relative flex w-full h-full">
            <SideBar />
            <main className="absolute left-[280px] grow-0 content">
                <Header />
                <div className="bg-gray-100 mt-4 p-4 h-full min-h-[820px] rounded-md">
                    {children}
                </div>
            </main>
        </div>
    )
}
