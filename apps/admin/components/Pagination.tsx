type Props = {
    pageCount: number
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

    return (
        <ul className="flex gap-3 mt-6">
            <li onClick={handleFirstClick}> {'<<'} </li>
            <li onClick={handlePrevClick}> {'<'} </li>
            {Array(props.pageCount)
                .fill('')
                .map((_, index) => (
                    <li key={index} onClick={() => handleItemClick(index + 1)}>
                        {index + 1}
                    </li>
                ))}
            <li onClick={handleNextClick}> {'>'} </li>
            <li onClick={handleLastClick}> {'>>'} </li>
        </ul>
    )
}
