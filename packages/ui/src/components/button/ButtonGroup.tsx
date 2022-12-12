import { ReactNode } from 'react'
import { BaseButton } from './Button'

export const GroupedButton = BaseButton

export type ButtonGroupProps = {
  children: ReactNode
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return (
    <div role="group" className="inline-flex rounded-md shadow-sm">
      {children}
    </div>
  )
}
