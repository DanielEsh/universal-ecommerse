import classnames from 'classnames'
import { paginationFactory } from '@/ui/Pagination/paginate'

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

    const paginationItems = paginationFactory({
        boundaryPagesRange: 2,
        siblingPagesRange: 4,
        ellipsisSize: 1,
        totalPages: 100,
        currentPage: currentPage,
    })

    console.log('ITEMS', paginationItems)

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
            <li
                className={itemsClasses(currentPage !== 1)}
                onClick={() => onClick(PageChangeEventType.first)}
            >
                {'<<'}
            </li>
            <li
                className={itemsClasses(Boolean(previous))}
                onClick={() => onClick(PageChangeEventType.previous)}
            >
                {'<'}
            </li>
            {paginationItems.map((item, index) => {
                if (item.type === 'ELLIPSIS') {
                    return <li key={index}>...</li>
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
            })}
            <li
                className={itemsClasses(Boolean(next))}
                onClick={() => onClick(PageChangeEventType.next)}
            >
                {'>'}
            </li>
            <li
                className={itemsClasses(currentPage !== totalPages)}
                onClick={() => onClick(PageChangeEventType.last)}
            >
                {'>>'}
            </li>
        </ul>
    )
}
