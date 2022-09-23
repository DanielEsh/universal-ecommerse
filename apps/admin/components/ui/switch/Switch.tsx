const COMPONENT_NAME = 'Switch'

export type SwitchPropsType = {
    checked: boolean
    disabled: boolean
    required: boolean
    name: string
    value: string
}

export const Switch = (props: SwitchPropsType) => {
    return (
        <button type="button" role="button">
            Switch
        </button>
    )
}

Switch.displayName = COMPONENT_NAME
