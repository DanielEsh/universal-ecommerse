import classNames from 'classnames'

type Props = {
    isActive: boolean
    number: number
    onClick: any
}

export const BrandPaginationItem = ({ isActive, number, onClick }: Props) => {
    const paginationClasses = classNames(
        'flex items-center justify-center w-[36px] h-[36px] border border-blue-500',
        {
            'bg-blue-500': isActive,
        },
    )

    return (
        <div className={paginationClasses} onClick={onClick}>
            {number}
        </div>
    )
}
