import { ReactNode } from 'react'

export type InputProps = {
    className: string
    id: string
    name: string
    label: string
    placeholder: string
    disabled: boolean
    addonAfter: ReactNode
    addonBefore: ReactNode
    onBlur: () => void
    onFocus: () => void
    onChange: () => void
}

export const Input = () => {
    return (
        <>
            
        </>
    )
}
