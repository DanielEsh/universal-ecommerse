'use client'

import { ReactNode } from 'react'
import { ReactQueryWrapper } from '@/src/app/App/ReactQueryWrapper'
import { initMsw } from '@/src/mocks'

type Props = {
  children: ReactNode
}

// if (process.env.NEXT_PUBLIC_API_MOCKING) {
//   console.log(process.env.NEXT_PUBLIC_API_MOCKING)
//   initMsw()
// }

export const App = ({ children }: Props) => {
  console.log('INIT APP')
  // Init MSW
  // ;(async () => {
  //   await initMsw()
  // })()

  return <ReactQueryWrapper>{children}</ReactQueryWrapper>
}
