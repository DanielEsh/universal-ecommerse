import { ReactNode } from 'react'
import {SideBar} from "../Sidebar";

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {

    return (
        <div>
            <SideBar />
            <main>{children}</main>
        </div>
    )
}
