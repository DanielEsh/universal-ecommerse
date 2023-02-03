import { createContext } from 'react'

export type TableContextType = {
  color: string
}

const NAME = 'TableContext'

export const TableContext = createContext<TableContextType>({
  color: 'primary',
})

TableContext.displayName = NAME
