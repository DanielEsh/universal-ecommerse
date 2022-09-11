export const createRange = (start: number, end: number): number[] => {
    const range: number[] = []
    for (let i = start; i <= end; i++) {
        range.push(i)
    }
    return range
}

export const createPageFactory = (currentPage: number) => {
    return (pageNumber: number) => {
        return {
            type: 'PAGE',
            key: pageNumber,
            value: pageNumber,
            isActive: pageNumber === currentPage,
        }
    }
}

export const createFirstEllipsis = (pageNumber: number) => {
    return {
        type: 'ELLIPSIS',
        key: 'FIRST_ELLIPSIS',
        value: pageNumber,
        isActive: false,
    }
}

export const createSecondEllipsis = (pageNumber: number) => {
    return {
        type: 'ELLIPSIS',
        key: 'SECOND_ELLIPSIS',
        value: pageNumber,
        isActive: false,
    }
}
