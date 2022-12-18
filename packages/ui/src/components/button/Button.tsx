import { forwardRef, ReactNode, useRef } from 'react'
import { clsx } from 'clsx'
import { Ripple } from '../ripple'
import { useComposedRefs } from '../../hooks/useComposedRefs'

type ButtonVariant = 'default' | 'ghost' | 'outlined'

type ButtonSizes = 'large' | 'medium' | 'small' | 'full'

import './Button.css'

export type ButtonProps = {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  size?: ButtonSizes
  variant?: ButtonVariant
  onMouseDown?: () => void
  onMouseUp?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
}

const COMPONENT_NAME = 'BaseButton'

export const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      size = 'medium',
      type = 'button',
      variant = 'default',
      ...otherProps
    } = props

    const defaultRef = useRef<HTMLButtonElement | null>(null)
    const buttonRef = useComposedRefs(defaultRef, forwardedRef)

    const handleClick = () => {
      if (props?.onClick) props.onClick()
    }

    const handleMouseEnter = () => {
      if (props.onMouseEnter) props.onMouseEnter()
    }

    const sizes = {
      small: 'py-1 px-2',
      medium: 'py-2 px-4',
      large: 'py-8 px-12',
      full: 'w-full h-full',
    }

    const classes = clsx(className, 'BaseButton ripple-root', sizes[size], {
      _outlined: variant === 'outlined',
      _ghost: variant === 'ghost',
    })

    return (
      <button
        ref={buttonRef}
        className={classes}
        type={type}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        {...otherProps}>
        {children}

        <Ripple />
      </button>
    )
  },
)

BaseButton.displayName = COMPONENT_NAME
