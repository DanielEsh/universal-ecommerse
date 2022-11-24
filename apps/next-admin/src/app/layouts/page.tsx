import Link from "next/link";

export default function Layout() {
    return (
        <div>
            PAGE

            <div className="flex gap-3">
                <Link href="layouts/tab1">Tab1</Link>
                <Link href="layouts/tab2">Tab2</Link>
                <Link href="layouts/tab3">Tab3</Link>
            </div>
        </div>
    )
}
