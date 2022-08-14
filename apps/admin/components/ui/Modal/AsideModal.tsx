import { ReactNode, forwardRef } from 'react';
import { BaseModal } from './BaseModal'

export type AsideModalProps = {
    children: ReactNode,
    containerEl?: HTMLElement
}

const NAME = 'AsideModal'

export const AsideModal = forwardRef<HTMLElement, AsideModalProps>((props, forwardedRef) => {
    const {
        children,
    } = props

    return (
        <Modal>
             <div 
                className="absolute top-0 right-0 w-[750px] h-full bg-slate-50"
            >
                {children}
            </div>
        </Modal>
        
    )
})

AsideModal.displayName = NAME