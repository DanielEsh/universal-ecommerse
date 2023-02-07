import { ReactNode } from 'react'

export type TableHeadProps = {
  children: ReactNode
}

export const TableHead = ({ children }: TableHeadProps) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}
