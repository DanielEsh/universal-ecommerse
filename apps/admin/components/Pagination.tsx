import classnames from 'classnames'

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

    const pagesClasses = (page: number) =>
        classnames(
            'flex items-center justify-center w-8 h-8 border border-black',
            {
                ['bg-black text-white']: page === currentPage,
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
            {Array(totalPages)
                .fill('')
                .map((_, index) => (
                    <li
                        key={index}
                        className={pagesClasses(index + 1)}
                        onClick={() =>
                            onClick(PageChangeEventType.item, index + 1)
                        }
                    >
                        {index + 1}
                    </li>
                ))}
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
