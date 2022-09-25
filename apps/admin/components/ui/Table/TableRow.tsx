import { ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { TableContext, TableContextType } from '@/ui/Table/TableContext'

export type TableRowProps = {
    children: ReactNode
    onClick?: () => void
}

export const TableRow = ({ children, onClick }: TableRowProps) => {
    const { color } = useContext<TableContextType>(TableContext)

    const colorsList: any = {
        primary: 'bg-white border border-stone-300 cursor-pointer',
    }

    const classes = classNames(colorsList[color])

    return (
        <tr className={classes} onClick={onClick}>
            {children}
        </tr>
    )
}
