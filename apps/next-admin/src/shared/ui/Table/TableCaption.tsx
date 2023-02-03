import { ReactNode } from 'react'

export type TableCaptionProps = {
  children: ReactNode
}

export const TableCaption = ({ children }: TableCaptionProps) => {
  return <caption className="py-4 text-left">{children}</caption>
}
