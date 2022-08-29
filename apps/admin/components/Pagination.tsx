export const Pagination = () => {
    const handleFirstClick = () => {
        console.log('FIRST')
    }

    const handlePrevClick = () => {
        console.log('PREV')
    }

    const handleItemClick = () => {
        console.log('ITEM')
    }

    const handleNextClick = () => {
        console.log('NEXT')
    }

    const handleLastClick = () => {
        console.log('LAST')
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
