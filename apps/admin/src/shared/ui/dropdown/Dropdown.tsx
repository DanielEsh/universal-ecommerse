import { ReactNode, useState, useRef } from 'react'
import type { Placement } from '@floating-ui/react-dom-interactions'
import { usePopover } from '@/src/shared/ui/dropdown/usePopover'
import { DropdownContext } from '@/src/shared/ui/dropdown/DropdownContext'
import { DropdownTrigger } from '@/src/shared/ui/dropdown/DropdownTrigger'
import { DropdownContent } from '@/src/shared/ui/dropdown/DropdownContent'

type PopoverOffset = {
    x?: number
    y?: number
}

type PopoverDelay = {
    enter?: number
    leave?: number
}

export type DropdownProps = {
    containerEl?: HTMLElement
    placement?: Placement
    offset?: PopoverOffset
    delay?: PopoverDelay
    withArrow?: boolean
    clickable?: boolean
    children: ReactNode
}

const COMPONENT_NAME = 'Dropdown'

export const DropdownRoot = (props: DropdownProps) => {
    const {
        containerEl,
        placement = 'bottom',
        offset = { x: 0, y: 10 },
        delay = { enter: 0, leave: 300 },
        withArrow = true,
        clickable = true,
        children,
    } = props

    const { enter: enterDelay, leave: leaveDelay } = delay

    const [timeout, setCloseTimout] = useState<any>(null)

    const arrowRef = useRef<any>(null)
    let activeElement: any

    const {
        open,
        onOpenChange,
        reference,
        floating,
        popoverStyles,
        arrowStyles,
    } = usePopover({
        placement: placement,
        arrow: arrowRef,
        offset,
    })

    const showPopover = () => {
        if (document.activeElement) activeElement = document.activeElement

        setTimeout(() => {
            onOpenChange(!open)
        }, enterDelay)
    }

    const hidePopover = () => {
        const timeout = setTimeout(() => {
            onOpenChange(false)
            if (activeElement) activeElement.focus()
        }, leaveDelay)
        setCloseTimout(timeout)
    }

    const handleFloatingEnter = () => {
        if (clickable) return
        clearTimeout(timeout)
    }

    const handleFloatingLeave = () => {
        if (clickable) return
        hidePopover()
    }

    const context: DropdownContext = {
        open,
        color: 'primary',
        containerEl: containerEl,
        popoverStyles: popoverStyles,
        withArrow: withArrow,
        arrowRef: arrowRef,
        arrowStyles: arrowStyles,
        isClickable: clickable,
        referenceRef: reference,
        floatingRef: floating,
        hidePopover,
        showPopover,
        handleFloatingEnter,
        handleFloatingLeave,
    }

    return (
        <DropdownContext.Provider value={context}>
            {children}
        </DropdownContext.Provider>
    )
}

export const Dropdown = Object.assign(DropdownRoot, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
})

DropdownRoot.displayName = COMPONENT_NAME
