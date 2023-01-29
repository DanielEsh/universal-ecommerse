'use client'

import { App } from '@/src/app/App'
import { DefaultLayout } from '@/src/widgets/layouts/DefaultLayout'
import { PropsWithChildren } from 'react'
import { initMsw } from '@/src/mocks'

import './globals.css'

// Init MSW
;(async () => {
  await initMsw()
})()

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <App>
          <DefaultLayout>{children}</DefaultLayout>
        </App>

        <div id="app" />
      </body>
    </html>
  )
}
