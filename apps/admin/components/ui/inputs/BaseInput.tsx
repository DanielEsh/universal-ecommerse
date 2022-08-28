import { ReactNode, forwardRef, ChangeEvent, useState, useRef } from 'react'
import classNames from 'classnames'

export type BaseInputProps = {
    className?: string
    id?: string
    name?: string
    defaultValue?: string
    placeholder?: string
    label?: string
    type?: string
    disabled?: boolean
    readOnly?: boolean
    addonAfter?: ReactNode
    addonBefore?: ReactNode
    autoFocus?: boolean
    onBlur?: () => void
    onFocus?: () => void
    onChange?: (value: string) => void
}

const NAME = 'BaseInput'

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
    (props, ref) => {
        const {
            className,
            defaultValue = '',
            placeholder = '',
            label = '',
            type = 'text',
            disabled,
            readOnly,
            addonAfter,
            addonBefore,
            onChange,
            onFocus,
            onBlur,
            autoFocus,
            id,
            name,
        } = props

        const defaultInputRef = useRef(null)

        const [value, setValue] = useState(defaultValue)
        const [isFocused, setFocused] = useState(false)

        const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
            if (readOnly) return
            setValue(event.target.value)
            if (onChange) onChange(event.target.value)
        }

        const handleFocusManagment = (focus: boolean) => {
            if (focus) {
                setFocused(focus)
                if (onFocus) onFocus()
                return
            }

            setFocused(focus)
            if (onBlur) onBlur()
        }

        const rootClasses = classNames(
            className,
            'relative flex items-center w-full h-[64px] px-[24px] border-[1px] rounded-md transition-colors bg-neutral-100 text-base hover:border-neutral-300',
            {
                ['border-blue-600 hover:border-blue-600']: isFocused,
            },
        )

        const labelClasses = classNames(
            'absolute bottom-[20px] left-0 text-base transition-transform',
            {
                ['-translate-y-[15px] -translate-x-[5px] scale-75']:
                    isFocused || value || placeholder,
            },
        )

        return (
            <div className={rootClasses}>
                <label className="relative w-full h-full pt-[16px]">
                    <input
                        ref={defaultInputRef}
                        className="relative w-full h-full p-0 m-0 bg-transparent outline-none"
                        id={id}
                        name={name}
                        type={type}
                        value={value}
                        disabled={disabled}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onFocus={() => handleFocusManagment(true)}
                        onBlur={() => handleFocusManagment(false)}
                    />

                    <div className={labelClasses}>{label}</div>
                </label>

                {addonAfter && addonAfter}
            </div>
        )
    },
)

BaseInput.displayName = NAME
