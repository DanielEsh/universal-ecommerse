import { ReactNode, useRef } from 'react'
import { clsx } from 'clsx'
import {
  RippleContext,
  RippleContextType,
} from '@/components/ripple/RippleContext'

export type RippleProps = {
  className?: string
  color?: string
  children?: ReactNode
}

export const RippleContainer = ({
  children,
  color,
  className,
}: RippleProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const context: RippleContextType = {
    color,
    containerRef,
  }

  const classes = clsx('relative overflow-hidden', className)

  return (
    <RippleContext.Provider value={context}>
      <div ref={containerRef} className={classes}>
        {children}
      </div>
    </RippleContext.Provider>
  )
}
