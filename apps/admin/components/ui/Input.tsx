import { ReactNode, forwardRef, ChangeEvent, useState } from 'react'

export type InputProps = {
    className?: string
    id?: string
    name?: string
    defaultValue?: string
    placeholder?: string
    disabled?: boolean
    readOnly?: boolean
    addonAfter?: ReactNode
    addonBefore?: ReactNode
    autoFocus?: boolean
    onBlur?: () => void
    onFocus?: () => void
    onChange?: (value: string) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        className,
        defaultValue = '',
        placeholder = '',
        disabled,
        readOnly,
        onChange,
        onFocus,
        onBlur,
        autoFocus,
        id,
        name,
      } = props

      const [value, setValue] = useState(defaultValue);

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (readOnly) return
        setValue(event.target.value)
        if (onChange) onChange(event.target.value)
      }

    return (
        <div className="relative flex item-center w-full h-[64px] px-[24px] rounded-md bg-neutral-300">
            <div className="relative w-full h-full pt-[16px]">
                <input 
                    ref={ref}
                    className="relative w-full h-full p-0 m-0"
                    id={id}
                    name={name}
                    type="text" 
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                <div className="absolute bottom-[20px] left-0">
                    Label
                </div>
            </div>
        </div>
    )
})

Input.displayName = 'Input'
