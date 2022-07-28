import { ReactNode } from 'react'
import {SideBar} from "../Sidebar";

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {

    return (
        <div className="relative flex w-full h-full">
            <SideBar />
            <main className="absolute left-[320px] grow-0 content">
                <div className="sticky top-0 bg-gray-200 w-full h-[100px]">
                    Header
                </div>
                <div className="bg-gray-100 mt-4 p-4 h-[1200px] rounded-md">
                    {children}
                </div>
            </main>
        </div>
    )
}
