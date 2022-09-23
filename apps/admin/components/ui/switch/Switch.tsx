import { useState } from 'react'
import classnames from 'classnames'

const COMPONENT_NAME = 'Switch'

export type SwitchPropsType = {
    checked: boolean
    disabled: boolean
    required: boolean
    name: string
    value: string
}

export const Switch = (props: SwitchPropsType) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    const classes = classnames('inline-block h-6 w-6 transform rounded-full bg-white transition', {
        ['translate-x-6']: toggle,
    })

    return (
        <button type="button" role="button" className="relative inline-flex h-6 w-12 items-center rounded-full bg-black" onClick={handleClick}>
            <span className={classes}></span>
        </button>
    )
}

Switch.displayName = COMPONENT_NAME
