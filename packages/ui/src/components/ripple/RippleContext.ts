import { createContext, ReactNode, MutableRefObject } from 'react'

export type RippleContextType = {
  color: string
  containerRef?: MutableRefObject<HTMLElement>
  rippleRef?: MutableRefObject<HTMLElement>
}

const COMPONENT_NAME = 'RippleContext'

export const RippleContext = createContext<RippleContextType>({
  color: 'primary',
})

RippleContext.displayName = COMPONENT_NAME
