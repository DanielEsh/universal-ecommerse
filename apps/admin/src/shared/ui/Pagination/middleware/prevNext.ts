import {
    createNextPageLink,
    createPreviousPageLink,
} from '@/src/shared/ui/Pagination/pagination.utils'

// export const prevNext = () => ({
//     fn(middlewareArguments: any) {
//         const { items, currentPage, totalPages } = middlewareArguments
//
//         const prev = createPreviousPageLink(currentPage)
//         const next = createNextPageLink(currentPage, totalPages)
//
//         return [prev, ...items, next]
//     },
// })

export const prevNext = () =>
    function (middlewareArguments: any) {
        const { items, currentPage, totalPages } = middlewareArguments

        const prev = createPreviousPageLink(currentPage)
        const next = createNextPageLink(currentPage, totalPages)

        return [prev, ...items, next]
    }
