import React from 'react';
import {logout} from "../service/auth.service";

export const SideBar = () => {

    const onLogout = async () => {
         await logout();
    }

    return (
        <div className="fixed grow-0 w-[320px] h-full p-8">
            SideBar



            <div>
                <button onClick={onLogout}>
                    Выйти
                </button>
            </div>
        </div>
    );
};
