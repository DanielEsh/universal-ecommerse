import { ReactNode, forwardRef, useRef } from 'react'
import { Portal } from '../portal'
import { useKeyPress } from '../../hooks/useKeyPress'
import { useClickOutside } from '../../hooks/useClickOutside'

export type BaseModalProps = {
  children: ReactNode
  containerEl?: HTMLElement
  isOpen?: boolean
  onExit?: () => void
}

const COMPONENT_NAME = 'BaseModal'

export const BaseModal = forwardRef<HTMLElement, BaseModalProps>(
  (props, forwardedRef) => {
    const { children, containerEl, isOpen, onExit } = props

    const defaultRef = useRef<HTMLDivElement | null>(null)
    const childrenRef = useRef<HTMLDivElement | null>(null)

    const Close = () => {
      if (!isOpen) return

      if (onExit) onExit()
    }

    useClickOutside(childrenRef, () => Close())

    useKeyPress('Escape', Close)

    return (
      <Portal container={containerEl}>
        <>
          {isOpen && (
            <div
              ref={defaultRef}
              className="fixed inset-0 overflow-hidden bg-neutral-800/50">
              <div ref={childrenRef}>{children}</div>
            </div>
          )}
        </>
      </Portal>
    )
  },
)

BaseModal.displayName = COMPONENT_NAME
