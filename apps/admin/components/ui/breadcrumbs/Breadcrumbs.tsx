import { Fragment } from 'react'
import { useRouter } from 'next/router'
import ChevronRightIcon from 'public/icons/chevron-right.svg'

type BreadcrumbsItemPropsType = {
    id: number
    link: string
    title: string
    isLast: boolean
}

const BreadcrumbsItem = ({
    id,
    link,
    title,
    isLast,
}: BreadcrumbsItemPropsType) => {
    if (isLast) {
        return (
            <li key={id}>
                <a href={link}>{title}</a>
            </li>
        )
    }

    return (
        <Fragment key={id}>
            <li>
                <a href={link} className="text-blue-500 hover:text-blue-700">
                    {title}
                </a>
            </li>

            <li aria-hidden="true">
                <div className="text-gray-800">
                    <ChevronRightIcon />
                </div>
            </li>
        </Fragment>
    )
}

export const Breadcrumbs = () => {
    const router = useRouter()

    const generateBreadcrumbs = () => {
        // Remove any query parameters, as those aren't included in breadcrumbs
        const asPathWithoutQuery = router.asPath.split('?')[0]

        let idCounter = 1

        // Break down the path between "/"s, removing empty entities
        // Ex:"/my/nested/path" --> ["my", "nested", "path"]
        const asPathNestedRoutes = asPathWithoutQuery
            .split('/')
            .filter((v) => v.length > 0)

        // Iterate over the list of nested route parts and build
        // a "crumb" object for each one.
        const breadcrumbsList = asPathNestedRoutes.map((subpath, idx) => {
            // We can get the partial nested route for the crumb
            // by joining together the path parts up to this point.
            const link = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
            // The title will just be the route string for now
            const title = subpath
            // make id
            const id = idCounter++
            return { link, title, id }
        })

        // Add in a default "Home" crumb for the top-level
        return [{ id: 0, link: '/', title: 'Home' }, ...breadcrumbsList]
    }

    const renderBreadcrumbs = generateBreadcrumbs()

    return (
        <nav className="bg-grey-light rounded-md w-full">
            <ol className="list-reset flex items-center gap-3">
                {renderBreadcrumbs.map(({ id, title, link }, index) => (
                    <BreadcrumbsItem
                        id={id}
                        title={title}
                        link={link}
                        isLast={index === renderBreadcrumbs.length - 1}
                    />
                ))}
            </ol>
        </nav>
    )
}
