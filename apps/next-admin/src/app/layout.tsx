import './globals.css'
import { App } from '@/src/app/App'
import { DefaultLayout } from '@/src/shared/components/layouts/DefaultLayout'
import { PropsWithChildren } from 'react'

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
