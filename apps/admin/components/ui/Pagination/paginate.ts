import {
    createFirstEllipsis,
    createPageFactory,
    createRange,
    createSecondEllipsis,
} from '@/ui/Pagination/pagination.utils'

type PaginationOptionsType = {
    /**
     * total number of pages
     */
    totalPages: number

    /**
     * currentPage number
     */
    currentPage: number

    /**
     * number of always visible pages at the beginning and end
     */
    boundaryPagesRange?: number

    /**
     * number of always visible pages before and after the current one
     */
    siblingPagesRange?: number

    middleware?: any
}

export function paginationFactory(options: PaginationOptionsType) {
    if (options == null) {
        throw new Error(
            '[paginationFactory]: options object should be a passed',
        )
    }

    const {
        boundaryPagesRange = 1,
        siblingPagesRange = 1,
        totalPages,
        currentPage,
        middleware = [],
    } = options

    if (isNaN(totalPages)) {
        throw new Error('[paginationFactory]: totalPages should be a number')
    }
    if (totalPages < 0) {
        throw new Error(
            "[paginationFactory]: totalPages shouldn't be a negative number",
        )
    }

    if (isNaN(currentPage)) {
        throw new Error('[paginationFactory]: currentPage should be a number')
    }
    if (currentPage < 0) {
        throw new Error(
            "[paginationFactory]: currentPage shouldn't be a negative number",
        )
    }

    if (currentPage > totalPages) {
        throw new Error(
            "[paginationFactory]: currentPage shouldn't be greater than totalPages",
        )
    }

    if (isNaN(boundaryPagesRange)) {
        throw new Error(
            '[paginationFactory]: boundaryPagesRange should be a number',
        )
    }
    if (boundaryPagesRange < 0) {
        throw new Error(
            "[paginationFactory]: boundaryPagesRange shouldn't be a negative number",
        )
    }

    if (isNaN(siblingPagesRange)) {
        throw new Error(
            '[paginationFactory]: siblingPagesRange should be a number',
        )
    }
    if (siblingPagesRange < 0) {
        throw new Error(
            "[paginationFactory]: siblingPagesRange shouldn't be a negative number",
        )
    }

    const ellipsisSize = 1
    let paginationModel = []
    const createPage = createPageFactory(currentPage)

    // Simplify generation of pages if number of available items is equal or greater than total pages to show
    if (
        1 + 2 * ellipsisSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >=
        totalPages
    ) {
        const allPages = createRange(1, totalPages).map(createPage)
        paginationModel.push(...allPages)
    } else {
        // Calculate group of first pages
        const firstPagesStart = 1
        const firstPagesEnd = boundaryPagesRange
        const firstPages = createRange(firstPagesStart, firstPagesEnd).map(
            createPage,
        )

        // Calculate group of last pages
        const lastPagesStart = totalPages + 1 - boundaryPagesRange
        const lastPages = createRange(lastPagesStart, totalPages).map(
            createPage,
        )

        // Calculate group of main pages
        const mainPagesStart = Math.min(
            Math.max(
                currentPage - siblingPagesRange,
                firstPagesEnd + ellipsisSize + 1,
            ),
            lastPagesStart - ellipsisSize - 2 * siblingPagesRange - 1,
        )
        const mainPagesEnd = mainPagesStart + 2 * siblingPagesRange
        const mainPages = createRange(mainPagesStart, mainPagesEnd).map(
            createPage,
        )

        // Add group of first pages
        paginationModel.push(...firstPages)

        // Calculate and add ellipsis before group of main pages
        const firstEllipsisPageNumber = mainPagesStart - 1
        const showPageInsteadOfFirstEllipsis =
            firstEllipsisPageNumber === firstPagesEnd + 1
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
        const secondEllipsis = createSecondEllipsisOrPage(
            secondEllipsisPageNumber,
        )
        paginationModel.push(secondEllipsis)

        // Add group of last pages
        paginationModel.push(...lastPages)
    }

    for (
        let middlewareIndex = 0;
        middlewareIndex < middleware.length;
        middlewareIndex++
    ) {
        paginationModel = middleware[middlewareIndex]({
            items: paginationModel,
            currentPage,
            totalPages,
        })
    }

    return paginationModel
}
