type Props = {
    onFirstClick: () => void
    onLastClick: () => void
    onItemClick: () => void
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

    const handleItemClick = () => {
        props.onItemClick()
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
            <li onClick={handleItemClick}>1</li>
            <li onClick={handleItemClick}>2</li>
            <li onClick={handleItemClick}>3</li>
            <li onClick={handleItemClick}>4</li>
            <li onClick={handleItemClick}>5</li>
            <li onClick={handleNextClick}> {'>'} </li>
            <li onClick={handleLastClick}> {'>>'} </li>
        </ul>
    )
}
