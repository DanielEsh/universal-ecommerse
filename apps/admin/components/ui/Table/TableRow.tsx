import { ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { TableContext } from '@/ui/Table/TableContext'

export type TableRowProps = {
    children: ReactNode
    onClick?: () => void
}

export const TableRow = ({ children, onClick }: TableRowProps) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { color } = useContext(TableContext)

    const colorsList = {
        primary: 'bg-slate-50 border-stone-300 cursor-pointer border-b',
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const classes = classNames(colorsList[color])

    return (
        <tr className={classes} onClick={onClick}>
            {children}
        </tr>
    )
}
