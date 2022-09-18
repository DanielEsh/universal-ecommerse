import { paginationFactory } from '@/ui/Pagination/paginate'
import { prevNext } from '@/ui/Pagination/middleware/prevNext'
import { firstLast } from '@/ui/Pagination/middleware/firstLast'
import {
    Ellipsis,
    LastPageLink,
    NextPageLink,
    PreviousPageLink,
    FirstPageLink,
    PageLink,
} from '@/ui/Pagination/PaginationComponents'

type metaType = {
    itemCount: number
    totalItemsCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
    previous: number
    next: number
}

type Props = {
    boundaryPagesRange?: number
    siblingPagesRange?: number
    meta: metaType
    onPageChange: (pageNumber: number) => void
}

const renderItemComponentFunctionFactory = (
    itemTypeToComponent,
    currentPage,
    onChange,
) => {
    const onItemClickFunctionFactory = ({ value, isDisabled }) => {
        return () => {
            if (!isDisabled && onChange && currentPage !== value) {
                onChange(value)
            }
        }
    }

    return (props) => {
        const ItemComponent = itemTypeToComponent[props.type]
        const onItemClick = onItemClickFunctionFactory(props)
        return <ItemComponent onClick={onItemClick} {...props} />
    }
}

export const Pagination = ({ meta, boundaryPagesRange = 2, siblingPagesRange = 1, onPageChange }: Props) => {
    const { totalPages, currentPage } = meta

    const disabled = false

    const paginationModel = paginationFactory({
        boundaryPagesRange: boundaryPagesRange,
        siblingPagesRange: siblingPagesRange,
        totalPages: totalPages,
        currentPage: currentPage,

        middleware: [prevNext(), firstLast()],
    })

    const itemTypeToComponent = {
        PAGE: PageLink,
        ELLIPSIS: Ellipsis,
        FIRST_PAGE_LINK: FirstPageLink,
        PREVIOUS_PAGE_LINK: PreviousPageLink,
        NEXT_PAGE_LINK: NextPageLink,
        LAST_PAGE_LINK: LastPageLink,
    }

    const renderItemComponent = renderItemComponentFunctionFactory(
        itemTypeToComponent,
        currentPage,
        onPageChange,
    )

    return (
        <ul className="flex gap-3 mt-6">
            {paginationModel.map((itemModel) =>
                renderItemComponent({
                    ...itemModel,
                    isDisabled: !!disabled,
                }),
            )}
        </ul>
    )
}
