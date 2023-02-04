'use client'

import { ReactNode } from 'react'
import { ReactQueryWrapper } from '@/src/app/App/ReactQueryWrapper'
import { initMsw } from '@/src/mocks'

type Props = {
  children: ReactNode
}

// Init MSW
if (process.env.NEXT_PUBLIC_API_MOCKING) {
  initMsw()
}

export const App = ({ children }: Props) => {
  return <ReactQueryWrapper>{children}</ReactQueryWrapper>
}
