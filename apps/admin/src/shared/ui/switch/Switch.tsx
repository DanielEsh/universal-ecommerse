import { useState, forwardRef } from 'react'
import classnames from 'classnames'

const COMPONENT_NAME = 'Switch'

export type SwitchPropsType = {
    checked?: boolean
    disabled?: boolean
    onChange?: () => void
    onCheckedChange?: (checked: boolean) => void
}

export const Switch = forwardRef<HTMLButtonElement, SwitchPropsType>(
    (props, forwardedRef) => {
        const { checked, onCheckedChange } = props

        const [toggle, setToggle] = useState<boolean>(checked ?? false)

        const handleClick = () => {
            setToggle(!toggle)
            onCheckedChange && onCheckedChange(toggle)
        }

        const classes = classnames(
            'inline-block h-6 w-6 transform rounded-full bg-white transition',
            {
                ['translate-x-full']: toggle,
            },
        )

        return (
            <button
                ref={forwardedRef}
                type="button"
                role="button"
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-black"
                onClick={handleClick}>
                <span className={classes}></span>
            </button>
        )
    },
)

Switch.displayName = COMPONENT_NAME
