import {
    createFirstPageLink,
    createLastPageLink,
} from '@/src/shared/ui/Pagination/pagination.utils'

export const firstLast = () =>
    function (middlewareArguments: any) {
        const { items, currentPage, totalPages } = middlewareArguments

        const first = createFirstPageLink(currentPage)
        const last = createLastPageLink(currentPage, totalPages)

        return [first, ...items, last]
    }
