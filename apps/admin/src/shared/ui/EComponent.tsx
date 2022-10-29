export type Props = {
    prop?: string
}

const COMPONENT_NAME = 'component'

export const Component = (props: Props) => {
    return <div>Component</div>
}

Component.displayName = COMPONENT_NAME
