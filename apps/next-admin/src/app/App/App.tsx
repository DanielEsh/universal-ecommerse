'use client'

import { ReactNode } from 'react'
import { ReactQueryWrapper } from '@/src/app/App/ReactQueryWrapper'

type Props = {
  children: ReactNode
}

export const App = ({ children }: Props) => {
  return <ReactQueryWrapper>{children}</ReactQueryWrapper>
}
