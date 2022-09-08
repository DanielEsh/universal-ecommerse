import {
    createRange,
    createFirstEllipsis,
    createSecondEllipsis,
    createPageFactory,
} from '@/ui/Pagination/pagination.utils'

type PaginationOptionsType = {
    boundaryPagesRange: number
    siblingPagesRange: number
    ellipsisSize: number
    totalPages: number
    currentPage: number
}

export const paginationFactory = (options: PaginationOptionsType) => {
    const {
        boundaryPagesRange,
        siblingPagesRange,
        ellipsisSize,
        totalPages,
        currentPage,
    } = options

    // const boundaryPagesRange = 2
    // const siblingPagesRange = 2
    // const ellipsisSize = 1
    // const totalPages = 18
    // const currentPage = 8

    const paginationModel = []

    const createPage = createPageFactory()

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
    return paginationModel
}
