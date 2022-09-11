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

export const createPreviousPageLink = (currentPage: number) => {
    return {
        type: 'PREVIOUS_PAGE_LINK',
        key: 'PREVIOUS_PAGE_LINK',
        value: Math.max(1, currentPage - 1),
        isActive: currentPage === 1,
    }
}

export const createNextPageLink = (currentPage: number, totalPages: number) => {
    return {
        type: 'NEXT_PAGE_LINK',
        key: 'NEXT_PAGE_LINK',
        value: Math.min(totalPages, currentPage + 1),
        isActive: currentPage === totalPages,
    }
}
