import './globals.css'
import { Sidebar } from "@/src/shared/components/common/sidebar/Sidebar";
import { ReactQueryWrapper } from "@/src/app/ReactQueryWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ReactQueryWrapper>
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
        </ReactQueryWrapper>

        <div id="app" />
      </body>
    </html>
  )
}
