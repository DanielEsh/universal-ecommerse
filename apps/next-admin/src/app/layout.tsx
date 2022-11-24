import './globals.css'
import Link from "next/link";
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
        <Sidebar />
        <div>GLOBAL LAYOUT</div>
        <div className="p-6 bg-stone-900 text-white">
            {children}
        </div>
        <footer>
            <div>
                footer
            </div>
            <Link href="/">To Home</Link>
        </footer>
      </body>
    </html>
  )
}
