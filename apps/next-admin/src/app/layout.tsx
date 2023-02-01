import { App } from '@/src/app/App'
import { DefaultLayout } from '@/src/widgets/layouts/DefaultLayout'
import { PropsWithChildren } from 'react'

import './globals.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
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
