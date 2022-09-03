import classnames from 'classnames'

type metaType = {
    itemCount: number
    totalItems: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
    previous: number
    next: number
}

type Props = {
    meta: metaType
    // events
    onFirstClick: () => void
    onLastClick: () => void
    onItemClick: (pageNumber: number) => void
    onPrevClick: () => void
    onNextClick: () => void
}

export const Pagination = (props: Props) => {
    const { totalPages, currentPage, next, previous } = props.meta

    const handleFirstClick = () => {
        props.onFirstClick()
    }

    const handlePrevClick = () => {
        props.onPrevClick()
    }

    const handleItemClick = (pageNumber: number) => {
        props.onItemClick(pageNumber)
    }

    const handleNextClick = () => {
        props.onNextClick()
    }

    const handleLastClick = () => {
        props.onLastClick()
    }

    const pagesClasses = (page: number) =>
        classnames('flex items-center justify-center w-8 h-8 border', {
            ['bg-blue-500']: page === currentPage,
        })

    const itemsClasses = (interactive = true) =>
        classnames('flex items-center justify-center w-8 h-8 border', {
            ['bg-red-500']: !interactive,
        })

    return (
        <ul className="flex gap-3 mt-6">
            <li className={itemsClasses()} onClick={handleFirstClick}>
                {'<<'}
            </li>
            <li
                className={itemsClasses(Boolean(previous))}
                onClick={handlePrevClick}
            >
                {'<'}
            </li>
            {Array(totalPages)
                .fill('')
                .map((_, index) => (
                    <li
                        key={index}
                        className={pagesClasses(index + 1)}
                        onClick={() => handleItemClick(index + 1)}
                    >
                        {index + 1}
                    </li>
                ))}
            <li
                className={itemsClasses(Boolean(next))}
                onClick={handleNextClick}
            >
                {'>'}
            </li>
            <li className={itemsClasses()} onClick={handleLastClick}>
                {'>>'}
            </li>
        </ul>
    )
}
