import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from 'ui'

export const HeaderBreadcrumbs = () => {
  const pathname = usePathname()

  const generateBreadcrumbs = () => {
    if (!pathname) {
      return
    }

    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = pathname.split('?')[0]

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
      return { link, title }
    })

    // Add in a default "Home" crumb for the top-level
    return [{ link: '/', title: 'Home' }, ...breadcrumbsList]
  }

  const renderBreadcrumbs = useMemo(() => generateBreadcrumbs(), [pathname])

  return (
    <Breadcrumbs>
      {renderBreadcrumbs?.map(({ title, link }, index) => (
        <Breadcrumbs.Item
          key={index}
          isLast={index === renderBreadcrumbs.length - 1}>
          <Link href={link}>{title}</Link>
        </Breadcrumbs.Item>
      ))}
    </Breadcrumbs>
  )
}
