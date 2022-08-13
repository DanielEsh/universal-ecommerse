import { forwardRef, ReactNode, useRef } from 'react'
import cn from 'classnames'

export type ButtonProps = {
    children: ReactNode
    className?: string
    type: 'button' | 'submit'
    onMouseDown?: () => void
    onMouseUp?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
}



export const Button = forwardRef<HTMLElement, ButtonProps>((props, innerRef) => {
    const {
      children,
      className,
      type,
      onClick,
      onMouseLeave,
      onBlur,
      onFocus,
      onMouseDown,
      onMouseUp,
      onMouseEnter,
    } = props
  
    const handleClick = (event) => {
      if (onClick) onClick()
    }
  
    const handleMouseEnter = (event) => {
      if (onMouseEnter) onMouseEnter()
    }
  
    return (
      <button
        className="bg-black text-white py-4 px-8 rounded-md w-full h-full"
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
})


  Button.displayName = 'Button';