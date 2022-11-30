import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

export default async function LayoutsLayput({ children }: Props) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Link href="layouts/tab1">Tab1</Link>
          <Link href="layouts/tab2">Tab2</Link>
          <Link href="layouts/tab3">Tab3</Link>
        </div>
      </div>

      <Link href="/layouts/modal">Open modal</Link>

      <div>{children}</div>
    </div>
  )
}
