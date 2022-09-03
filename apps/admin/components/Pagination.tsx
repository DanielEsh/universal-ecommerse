import classnames from 'classnames'

type Props = {
    pageCount: number
    currentPage: number
    // events
    onFirstClick: () => void
    onLastClick: () => void
    onItemClick: (pageNumber: number) => void
    onPrevClick: () => void
    onNextClick: () => void
}

export const Pagination = (props: Props) => {
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
            ['bg-blue-500']: page === props.currentPage,
        })

    return (
        <ul className="flex gap-3 mt-6">
            <li onClick={handleFirstClick}> {'<<'} </li>
            <li onClick={handlePrevClick}> {'<'} </li>
            {Array(props.pageCount)
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
            <li onClick={handleNextClick}> {'>'} </li>
            <li onClick={handleLastClick}> {'>>'} </li>
        </ul>
    )
}
