import { ReactNode } from 'react'

export type TableRowProps = {
    children: ReactNode
    onClick?: () => void
}

export const TableRow = ({ children, onClick }: TableRowProps) => {
    return (
        <tr
            className="bg-slate-50 even:bg-slate-200 hover:bg-blue-500"
            onClick={onClick}
        >
            {children}
        </tr>
    )
}
