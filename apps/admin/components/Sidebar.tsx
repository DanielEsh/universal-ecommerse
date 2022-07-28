import React from 'react';
import {logout} from "../service/auth.service";
import { Logo } from './Logo';
import { AsideMenu } from './AsideMenu';
import { AsideUser } from './AsideUser';

export const SideBar = () => {

    const onLogout = async () => {
         await logout();
    }

    return (
        <aside className="fixed grow-0 w-[320px] h-full p-8">
            <Logo />
            <AsideMenu />
            <AsideUser />

            <div>
                <button onClick={onLogout}>
                    Выйти
                </button>
            </div>
        </aside>
    );
};
