import { forwardRef, ReactNode, useRef } from 'react'
import classNames from 'classnames'

export type ButtonProps = {
    children: ReactNode
    className?: string
    type?: 'button' | 'submit'
    size?: 'large' | 'medium' | 'small' | 'block'
    onMouseDown?: () => void
    onMouseUp?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
    (props, forwardedRef) => {
        const {
            children,
            className,
            size = 'medium',
            type = 'button',
            onClick,
            onMouseLeave,
            onBlur,
            onFocus,
            onMouseDown,
            onMouseUp,
            onMouseEnter,
        } = props

        const defaultRef = useRef<HTMLButtonElement>(null)

        const handleClick = () => {
            if (onClick) onClick()
        }

        const handleMouseEnter = () => {
            if (onMouseEnter) onMouseEnter()
        }

        const sizes = {
            small: 'py-1 px-2',
            medium: 'py-4 px-8',
            large: 'py-8 px-12',
            block: 'w-full h-full',
        }

        const classes = classNames(
            className,
            'bg-black text-white rounded-md',
            sizes[size],
        )

        return (
            <button
                ref={defaultRef}
                className={classes}
                type={type}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onBlur={onBlur}
                onFocus={onFocus}
            >
                {children}
            </button>
        )
    },
)

Button.displayName = 'Button'
