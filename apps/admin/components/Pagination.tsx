import classnames from 'classnames'
import { paginationFactory } from '@/ui/Pagination/paginate'
import { prevNext } from '@/ui/Pagination/middleware/prevNext'
import { firstLast } from '@/ui/Pagination/middleware/firstLast'

type metaType = {
    itemCount: number
    totalItemsCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
    previous: number
    next: number
}

enum PageChangeEventType {
    first,
    previous,
    item,
    next,
    last,
}

type Props = {
    meta: metaType
    onPageChange: (pageNumber: number) => void
}

export const Pagination = ({ meta, onPageChange }: Props) => {
    const { totalPages, currentPage, next, previous } = meta

    const resultPag = paginationFactory({
        boundaryPagesRange: 2,
        siblingPagesRange: 3,
        totalPages: 100,
        currentPage: currentPage,

        middleware: [prevNext(), firstLast()],
    })

    // const paginationWithPrevNext = paginationPrevNext(
    //     paginationItems,
    //     currentPage,
    //     100,
    // )
    //
    // const resultPag = paginationFirstLast(
    //     paginationWithPrevNext,
    //     currentPage,
    //     100,
    // )

    console.log('ITEMS', resultPag)

    const onClick = (eventType: PageChangeEventType, pageNumber?: number) => {
        const actionsList = {
            0: () => onPageChange(1),
            1: () => meta.previous && onPageChange(meta.previous),
            2: () => pageNumber && onPageChange(pageNumber),
            3: () => meta.next && onPageChange(meta.next),
            4: () => onPageChange(meta.totalPages),
        }

        actionsList[eventType]()
    }

    const pagesClasses = (isActive: boolean) =>
        classnames(
            'flex items-center justify-center w-8 h-8 border border-black',
            {
                ['bg-black text-white']: isActive,
            },
        )

    const itemsClasses = (interactive = true) =>
        classnames(
            'flex items-center justify-center w-8 h-8 border border-black',
            {
                ['opacity-60']: !interactive,
            },
        )

    return (
        <ul className="flex gap-3 mt-6">
            {resultPag.map((item, index) => {
                if (item.type === 'ELLIPSIS') {
                    return (
                        <li className={pagesClasses(false)} key={index}>
                            ...
                        </li>
                    )
                }

                if (item.type === 'PAGE') {
                    return (
                        <li
                            key={index}
                            className={pagesClasses(item.isActive)}
                            onClick={() =>
                                onClick(PageChangeEventType.item, item.value)
                            }
                        >
                            {item.value}
                        </li>
                    )
                }

                if (item.type === 'PREVIOUS_PAGE_LINK') {
                    return (
                        <li
                            key={index}
                            className={pagesClasses(item.isActive)}
                            onClick={() =>
                                onClick(PageChangeEventType.item, item.value)
                            }
                        >
                            {'<'}
                        </li>
                    )
                }

                if (item.type === 'NEXT_PAGE_LINK') {
                    return (
                        <li
                            key={index}
                            className={pagesClasses(item.isActive)}
                            onClick={() =>
                                onClick(PageChangeEventType.item, item.value)
                            }
                        >
                            {'>'}
                        </li>
                    )
                }

                if (item.type === 'FIRST_PAGE_LINK') {
                    return (
                        <li
                            key={index}
                            className={pagesClasses(item.isActive)}
                            onClick={() =>
                                onClick(PageChangeEventType.item, item.value)
                            }
                        >
                            {'|<<'}
                        </li>
                    )
                }

                if (item.type === 'LAST_PAGE_LINK') {
                    return (
                        <li
                            key={index}
                            className={pagesClasses(item.isActive)}
                            onClick={() =>
                                onClick(PageChangeEventType.item, item.value)
                            }
                        >
                            {'>>|'}
                        </li>
                    )
                }
            })}
        </ul>
    )
}
