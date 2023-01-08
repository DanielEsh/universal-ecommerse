import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-[2000px] text-black dark:text-white">
      <div>Dashboard page</div>
      <Link href="/layouts">Dashboard</Link>
    </div>
  )
}
