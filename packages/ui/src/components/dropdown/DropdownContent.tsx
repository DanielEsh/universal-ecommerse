import { forwardRef, ReactNode, useContext, useRef } from 'react'
import { DropdownContext } from './DropdownContext'
import { DropdownArrow } from './DropdownArrow'

import { composeRefs } from '../../hooks/useComposedRefs'
import { Portal } from '../portal'
import { useClickOutside } from '../../hooks/useClickOutside'

export type Props = {
  children: ReactNode
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
}

const COMPONENT_NAME = 'DropdownContent'

export const DropdownContent = forwardRef<HTMLDivElement, Props>(
  (props, forwardedRef) => {
    const { children, onMouseEnter, onMouseLeave } = props

    const {
      popoverStyles,
      floatingRef,
      handleFloatingEnter,
      handleFloatingLeave,
      withArrow,
      arrowRef,
      containerEl,
      open,
      hidePopover,
    } = useContext(DropdownContext)

    const defaultRef = useRef<any>()

    const ref = composeRefs(defaultRef, floatingRef, forwardedRef)
    useClickOutside(defaultRef, () => {
      if (open && hidePopover) {
        hidePopover()
      }
    })

    return open ? (
      <Portal container={containerEl}>
        <div
          ref={ref}
          style={popoverStyles}
          onMouseEnter={handleFloatingEnter}
          onMouseLeave={handleFloatingLeave}>
          {children}

          {withArrow && <DropdownArrow ref={arrowRef} />}
        </div>
      </Portal>
    ) : null
  },
)

DropdownContent.displayName = COMPONENT_NAME
