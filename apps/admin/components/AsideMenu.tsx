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
            slug: '/goods',
        },
    ]

    const classes = (isActie: boolean) => {
        const activeStyles = `before:content-[''] before:absolute before:left-0 before:w-2 before:h-full before:bg-black before:rounded-r-md`

        return classNames('relative flex items-center justify-center w-full h-[56px] rounded-md', {
            [activeStyles]: isActie,
        })
    }

    return (
        <div className="flex flex-col gap-2">
            {list.map((item) => (
                <Link key={item.id} href={item.slug}>
                    <a className={classes(router.pathname == item.slug)}>{item.name}</a>
                </Link>
            ))}
        </div>
    )
}
