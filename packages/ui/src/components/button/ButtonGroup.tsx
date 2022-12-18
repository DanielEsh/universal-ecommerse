import { ReactNode } from 'react'
import { BaseButton } from './Button'

import './ButtonGroup.css'

export const GroupedButton = BaseButton

export type ButtonGroupProps = {
  children: ReactNode
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return (
    <div role="group" className="ButtonGroup">
      {children}
    </div>
  )
}
