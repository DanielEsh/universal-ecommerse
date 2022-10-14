import React from 'react'
import { Logo } from './Logo'
import { SidebarMenu } from '@/src/widgets/sidebar/SidebarMenu'

export const SideBar = () => {
    return (
        <aside className="fixed grow-0 w-[280px] h-full">
            <div className="p-8">
                <Logo />
            </div>
            <SidebarMenu />
        </aside>
    )
}
