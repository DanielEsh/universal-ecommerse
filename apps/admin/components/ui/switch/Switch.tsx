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
        <button type="button" role="button" className="relative inline-flex h-6 w-12 items-center rounded-full bg-black">
            <span className="inline-block h-6 w-6 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1"></span>
        </button>
    )
}

Switch.displayName = COMPONENT_NAME
