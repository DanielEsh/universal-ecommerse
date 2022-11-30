import './globals.css'
import { Sidebar } from '@/src/shared/components/common/sidebar/Sidebar'
import { App } from '@/src/app/App'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <App>
          <div className="flex">
            <Sidebar />

            <div className="content">
              <header className="fixed h-[64px] w-full bg-green-400">
                HEADER
              </header>

              <div className="mt-[64px] bg-stone-900 p-6 text-white">
                {children}
              </div>
            </div>
          </div>
        </App>

        <div id="app" />
      </body>
    </html>
  )
}
