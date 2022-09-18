import classnames from 'classnames'

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

const pagesClasses = (isActive: boolean) =>
    classnames('flex items-center justify-center w-8 h-8 border border-black', {
        ['bg-black text-white']: isActive,
    })

const itemsClasses = (interactive = true) =>
    classnames('flex items-center justify-center w-8 h-8 border border-black', {
        ['opacity-60']: !interactive,
    })

export const FirstPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button
            className={itemsClasses(disabled)}
            disabled={disabled}
            onClick={onClick}
        >
            First
        </button>
    </li>
)

export const PreviousPageLink = ({
    onClick,
    disabled,
}: PaginationItemsProps) => (
    <li>
        <button
            className={itemsClasses(disabled)}
            disabled={disabled}
            onClick={onClick}
        >
            Previous
        </button>
    </li>
)

export const NextPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button
            className={itemsClasses(disabled)}
            disabled={disabled}
            onClick={onClick}
        >
            Next
        </button>
    </li>
)

export const LastPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button
            className={itemsClasses(disabled)}
            disabled={disabled}
            onClick={onClick}
        >
            Last
        </button>
    </li>
)

export const Ellipsis = ({ onClick, disabled }: PaginationItemsProps) => (
    <li>
        <button
            className={itemsClasses(disabled)}
            disabled={disabled}
            onClick={onClick}
        >
            ...
        </button>
    </li>
)

export const PageLink = ({
    active,
    value,
    disabled,
    onClick,
}: PaginationPageProps) => (
    <li>
        <button
            className={pagesClasses(active)}
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </button>
    </li>
)
