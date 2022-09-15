import classnames from 'classnames'
import { paginationFactory } from '@/ui/Pagination/paginate'
import { prevNext } from '@/ui/Pagination/middleware/prevNext'
import { firstLast } from '@/ui/Pagination/middleware/firstLast'

type metaType = {
    itemCount: number
    totalItemsCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
    previous: number
    next: number
}

enum PageChangeEventType {
    first,
    previous,
    item,
    next,
    last,
}

type Props = {
    meta: metaType
    onPageChange: (pageNumber: number) => void
}

type PaginationItemsProps = {
    disabled: boolean
    onClick: () => void
}

type PaginationPageProps = {
    active: boolean
    disabled: boolean
    value: number
    onClick: () => void
}

const FirstPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button onClick={onClick} disabled={disabled}>
            First
        </button>
    </li>
)

const PreviousPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button onClick={onClick} disabled={disabled}>
            Previous
        </button>
    </li>
)

const NextPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button onClick={onClick} disabled={disabled}>
            Next
        </button>
    </li>
)

const LastPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button onClick={onClick} disabled={disabled}>
            Last
        </button>
    </li>
)

const Ellipsis = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button onClick={onClick} disabled={disabled}>
            ...
        </button>
    </li>
)

const PageLink = ({
    active,
    value,
    disabled,
    onClick,
}: PaginationPageProps) => (
    <li>
        <button
            style={active ? { fontWeight: 'bold' } : {}}
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </button>
    </li>
)

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

export const Pagination = ({ meta, onPageChange }: Props) => {
    const { totalPages, currentPage, next, previous } = meta

    const disabled = false

    const paginationModel = paginationFactory({
        boundaryPagesRange: 2,
        siblingPagesRange: 3,
        totalPages: 100,
        currentPage: currentPage,

        middleware: [prevNext(), firstLast()],
    })

    console.log('ITEMS', paginationModel)

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

    // const pagesClasses = (isActive: boolean) =>
    //     classnames(
    //         'flex items-center justify-center w-8 h-8 border border-black',
    //         {
    //             ['bg-black text-white']: isActive,
    //         },
    //     )
    //
    // const itemsClasses = (interactive = true) =>
    //     classnames(
    //         'flex items-center justify-center w-8 h-8 border border-black',
    //         {
    //             ['opacity-60']: !interactive,
    //         },
    //     )

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
