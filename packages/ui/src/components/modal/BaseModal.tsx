import { ReactNode, forwardRef, useRef } from 'react'
import { Portal } from '../portal'

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

        const defaultRef = useRef(null)
        const childrenRef = useRef(null)

        const Close = () => {
            if (!isOpen) return

            if (onExit) onExit()
        }

        return (
            <Portal container={containerEl}>
                <>
                    {isOpen && (
                        <div
                            ref={defaultRef}
                            className="fixed inset-0 bg-neutral-800/50 overflow-hidden"
                        >
                            <div ref={childrenRef}>{children}</div>
                        </div>
                    )}
                </>
            </Portal>
        )
    },
)

BaseModal.displayName = COMPONENT_NAME
