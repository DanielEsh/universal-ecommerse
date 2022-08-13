import { ReactNode, forwardRef } from 'react';
import {Portal} from '../Portal';

export type ModalProps = {
    children: ReactNode,
    containerEl?: HTMLElement
}

const NAME = 'Modal'

export const Modal = forwardRef<HTMLElement, ModalProps>((props, forwardedRef) => {
    const {
        children,
        containerEl,
    } = props

    return (
        <Portal container={containerEl}>
            <div className="fixed inset-0 bg-neutral-800/50 overflow-hidden">
                {children}
            </div>
        </Portal>
        
    )
})

Modal.displayName = NAME