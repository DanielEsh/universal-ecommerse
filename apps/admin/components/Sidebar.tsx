import React from 'react'
import { Logo } from './Logo'
import { AsideMenu } from './AsideMenu'

export const SideBar = () => {
    return (
        <aside className="fixed grow-0 w-[320px] h-full p-8">
            <Logo />
            <div className="mt-8">
                <AsideMenu />
            </div>
        </aside>
    )
}
