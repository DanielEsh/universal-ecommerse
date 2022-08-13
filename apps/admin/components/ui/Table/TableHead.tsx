import { ReactNode } from 'react'

export type TableHeadProps = {
    children: ReactNode
}

export const TableHead = ({children}: TableHeadProps) => {
    return (
        <thead>
            {children}
        </thead>
    )
}
