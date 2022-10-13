import { FC, ReactElement, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { canUseDom } from '../../../../utils/ui/canUseDom'

const DEFAULT_APP_INSTANCE_ID = 'app'

const app = canUseDom()
    ? document.getElementById(DEFAULT_APP_INSTANCE_ID)
    : null

export type PortalProps = {
    children: ReactElement
    container?: HTMLElement
}

export const Portal: FC<PortalProps> = (props) => {
    const { children, container } = props
    const [node, setNode] = useState<HTMLElement | null>(app)

    useEffect(() => {
        if (container) setNode(container)
    }, [container])

    return node ? createPortal(children, node) : null
}
