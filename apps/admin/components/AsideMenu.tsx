import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export const AsideMenu = () => {
    const router = useRouter()

    const list = [
        {
            id: 1,
            name: 'Категории',
            slug: '/categories',
        },
        {
            id: 2,
            name: 'Бренды',
            slug: '/brands',
        },
        {
            id: 3,
            name: 'Товары',
            slug: 'goods',
        },
    ]

    const classes = (isActie: boolean) => {
        return classNames(
            'flex items-center justify-center w-full h-[56px] border border-black rounded-md',
            {
                ['bg-black text-white']: isActie,
            },
        )
    }

    return (
        <div className="flex flex-col gap-2">
            {list.map((item) => (
                <Link key={item.id} href={item.slug}>
                    <a className={classes(router.pathname == item.slug)}>
                        {item.name}
                    </a>
                </Link>
            ))}
        </div>
    )
}
