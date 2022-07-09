import { ReactNode } from 'react'

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {

    return (
        <div>
            GLOBAL LAYOUT
            <main>{children}</main>
        </div>
    )
}
