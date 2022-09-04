import { ReactNode } from 'react'

export type TableRowProps = {
    children: ReactNode
    onClick?: () => void
}

export const TableRow = ({ children, onClick }: TableRowProps) => {
    return (
        <tr
            className="bg-slate-50 even:bg-slate-200 hover:bg-black hover:text-white border-stone-600 cursor-pointer"
            onClick={onClick}
        >
            {children}
        </tr>
    )
}
