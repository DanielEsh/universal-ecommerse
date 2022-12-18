import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { BaseButton } from './Button'

import './ButtonGroup.css'

export const GroupedButton = BaseButton

type ButtonGroupDerection = 'vertical' | 'horizontal'

export type ButtonGroupProps = {
  children: ReactNode
  className?: string
  direction?: ButtonGroupDerection
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, className, direction = 'horizontal' } = props

  const directionList = {
    vertical: '_vertical',
    horizontal: '_horizontal',
  }

  const classes = clsx(className, 'ButtonGroup', directionList[direction])

  return (
    <div role="group" className={classes}>
      {children}
    </div>
  )
}
