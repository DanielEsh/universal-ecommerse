import { ReactNode } from 'react'
import {SideBar} from "../Sidebar";

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {

    return (
        <div className="relative flex w-full h-full">
            <SideBar />
            <main className="absolute left-[320px] grow-0 p-4 content">
                <div className="bg-gray-100 p-4 h-[1200px] rounded-md">
                    {children}
                </div>
            </main>
        </div>
    )
}
