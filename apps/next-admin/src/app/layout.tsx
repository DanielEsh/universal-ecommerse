import './globals.css'
import { Sidebar } from "../components/sidebar/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
            <Sidebar />

            <div className="content">
                <header className="fixed w-full h-[64px] bg-green-400">
                    HEADER
                </header>

                <div className="mt-[64px] p-6 bg-stone-900 text-white">
                    {children}
                </div>
            </div>
        </div>
      </body>
    </html>
  )
}
