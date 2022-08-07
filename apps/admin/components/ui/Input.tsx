import { ReactNode, forwardRef, ChangeEvent, useState, useRef, } from 'react'
import classNames from 'classnames'

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
    onBlur?: any
    onFocus?: any
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

      const defaultInputRef = useRef(null);

      const [value, setValue] = useState(defaultValue);
      const [isFocused, setFocused] = useState(false);

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (readOnly) return
        setValue(event.target.value)
        if (onChange) onChange(event.target.value)
      }

      const handleFocus = () => {
        setFocused(true)
      }

      const handleBlur = () => {
        setFocused(false);;
      }

      const labelClasses = classNames(
        'absolute bottom-[20px] left-0 transition-transform',
        {
          ['-translate-y-[15px] -translate-x-[5px] scale-75']: isFocused || value,
        },
      )

    return (
        <div className="relative flex item-center w-full h-[64px] px-[24px] rounded-md bg-neutral-300">
            <div className="relative w-full h-full pt-[16px]">
                <input 
                    ref={defaultInputRef}
                    className="relative w-full h-full p-0 m-0 bg-transparent outline-none"
                    id={id}
                    name={name}
                    type="text" 
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />

                <div className={labelClasses}>
                    Label
                </div>
            </div>
        </div>
    )
})

Input.displayName = 'Input'
