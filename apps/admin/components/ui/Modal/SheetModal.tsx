import { ReactNode, forwardRef } from 'react';
import { Modal } from './Modal'

export type SheetModalProps = {
    children: ReactNode,
    containerEl?: HTMLElement
}

const NAME = 'SheetModal'

export const SheetModal = forwardRef<HTMLElement, SheetModalProps>((props, forwardedRef) => {
    const {
        children,
    } = props

    return (
        <Modal>
             <div 
                className="absolute bottom-0 w-full h-[90%] bg-slate-50 rounded-t-3xl"
            >
                {children}
            </div>
        </Modal>
        
    )
})

SheetModal.displayName = NAME