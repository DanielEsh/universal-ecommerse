import React from 'react'
import { Logo } from './Logo'
import { AsideMenu } from './AsideMenu'

export const SideBar = () => {
    return (
        <aside className="fixed grow-0 w-[280px] h-full">
            <div className="p-8">
                <Logo />
            </div>
            <AsideMenu />
        </aside>
    )
}
