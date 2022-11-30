'use client'

import { ReactNode, useEffect } from 'react'
import { ReactQueryWrapper } from '@/src/app/ReactQueryWrapper'
import { initMsw } from '@/src/mocks'

type Props = {
  children: ReactNode
}

export const App = ({ children }: Props) => {
  initMsw()

  return <ReactQueryWrapper>{children}</ReactQueryWrapper>
}
