import { ReactNode } from 'react'

export type TableRowProps = {
    children: ReactNode
}

export const TableRow = ({children}: TableRowProps) => {
    return (
        <tr className="bg-slate-50 even:bg-gray-300">
            {children}
        </tr>
    )
}

