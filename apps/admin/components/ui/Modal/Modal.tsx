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
                <div className="absolute top-0 right-0 w-[750px] h-full bg-slate-50">
                    {children}
                </div>
            </div>
        </Portal>
        
    )
})

Modal.displayName = NAME