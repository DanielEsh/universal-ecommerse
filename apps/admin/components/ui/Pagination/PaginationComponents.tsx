import classnames from 'classnames'
import LeftIcon from 'public/icons/left.svg'
import ChevronLeftIcon from 'public/icons/chevron-left.svg'
import ChevronRightIcon from 'public/icons/chevron-right.svg'
import RightIcon from 'public/icons/right.svg'

type PaginationItemsProps = {
    disabled: boolean
    onClick: () => void
}

type PaginationPageProps = {
    isActive: boolean
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
          <LeftIcon />
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
          <ChevronLeftIcon />
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
            <ChevronRightIcon />
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
            <RightIcon />
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
    isActive,
    value,
    disabled,
    onClick,
}: PaginationPageProps) => (
    <li>
        <button
            className={pagesClasses(isActive)}
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </button>
    </li>
)
