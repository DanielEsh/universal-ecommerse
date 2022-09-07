export const pagination = () => {
    const boundaryPagesRange = 2
    const siblingPagesRange = 2
    const ellipsisSize = 1
    const totalPages = 18
    const currentPage = 8

    const paginationModel = []

    const createRange = (start: number, end: number): number[] => {
        const range: number[] = []
        for (let i = start; i <= end; i++) {
            range.push(i)
        }
        return range
    }

    const createPageFunctionFactory = (currentPage?: number) => {
        return (pageNumber: number) => {
            return {
                type: 'PAGE',
                key: pageNumber,
                value: pageNumber,
                isActive: pageNumber === currentPage,
            }
        }
    }

    const createFirstEllipsis = (pageNumber: number) => {
        return {
            type: 'ELLIPSIS',
            key: 'FIRST_ELLIPSIS',
            value: pageNumber,
            isActive: false,
        }
    }

    const createSecondEllipsis = (pageNumber: number) => {
        return {
            type: 'ELLIPSIS',
            key: 'SECOND_ELLIPSIS',
            value: pageNumber,
            isActive: false,
        }
    }

    const createPage = createPageFunctionFactory()

    // Calculate group of first pages
    const firstPagesStart = 1
    const firstPages = createRange(firstPagesStart, boundaryPagesRange).map(
        createPage,
    )

    // Calculate group of last pages
    const lastPagesStart = totalPages + 1 - boundaryPagesRange
    const lastPages = createRange(lastPagesStart, totalPages).map(createPage)

    const mainPagesStart = Math.min(
        Math.max(
            currentPage - siblingPagesRange,
            boundaryPagesRange + ellipsisSize + 1,
        ),
        lastPagesStart - ellipsisSize - 2 * siblingPagesRange - 1,
    )
    const mainPagesEnd = mainPagesStart + 2 * siblingPagesRange
    const mainPages = createRange(mainPagesStart, mainPagesEnd).map(createPage)

    console.log('startPages', firstPages)
    console.log('lastPages', lastPages)
    console.log('mainPages', mainPages)
    // console.log("endPages", endPages);
    paginationModel.push(...firstPages)

    const firstEllipsisPageNumber = mainPagesStart - 1
    const showPageInsteadOfFirstEllipsis =
        firstEllipsisPageNumber === boundaryPagesRange + 1
    const createFirstEllipsisOrPage = showPageInsteadOfFirstEllipsis
        ? createPage
        : createFirstEllipsis
    const firstEllipsis = createFirstEllipsisOrPage(firstEllipsisPageNumber)
    paginationModel.push(firstEllipsis)

    // Add group of main pages
    paginationModel.push(...mainPages)

    // Calculate and add ellipsis after group of main pages
    const secondEllipsisPageNumber = mainPagesEnd + 1
    const showPageInsteadOfSecondEllipsis =
        secondEllipsisPageNumber === lastPagesStart - 1
    const createSecondEllipsisOrPage = showPageInsteadOfSecondEllipsis
        ? createPage
        : createSecondEllipsis
    const secondEllipsis = createSecondEllipsisOrPage(secondEllipsisPageNumber)
    paginationModel.push(secondEllipsis)

    // Add group of last pages
    paginationModel.push(...lastPages)

    // return [1, 2, '...', 4, <5> '...', 17, 18]
    console.log('pag', paginationModel)
}
