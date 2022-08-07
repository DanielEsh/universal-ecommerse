import { ReactNode, forwardRef, ChangeEvent, useState } from 'react'

export type InputProps = {
    className?: string
    id?: string
    name?: string
    defaultValue: string
    label?: string
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
        label = '',
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
        <label>
            <input 
                ref={ref}
                id={id}
                name={name}
                type="text"
                value={value}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </label>
    )
})

Input.displayName = 'Input'
