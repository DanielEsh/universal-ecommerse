import { ReactElement, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { canUseDOM } from '../../utils/canUseDOM/canUseDOM'

const DEFAULT_APP_INSTANCE_ID = 'app'


const app = canUseDOM()
    ? document.getElementById(DEFAULT_APP_INSTANCE_ID)
    : null

export type PortalProps = {
    children: ReactElement
    container?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const { children, container } = props
    const [portalNode, setPortalNode] = useState<HTMLElement | null>(null)

    useEffect(() => {
        const app = document.getElementById(DEFAULT_APP_INSTANCE_ID)
        setPortalNode(app)

        if (container) setPortalNode(app)
    }, [container])

    return portalNode ? createPortal(children, portalNode) : null
}
