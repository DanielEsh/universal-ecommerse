import {
    forwardRef,
    ReactNode,
    useState,
    useRef,
    MutableRefObject,
} from 'react'
import type { Placement } from '@floating-ui/react-dom-interactions'
import { usePopover } from '@/src/shared/ui/dropdown/usePopover'
import { Portal } from '@/src/shared/ui/Portal'
import { Menu } from '@/src/shared/ui/dropdown/Menu'
import { Divider } from '@/src/shared/ui/Divider/Divider'
import {
    composeRefs,
    useComposedRefs,
} from '@/src/shared/utils/ui/compose-refs/composeRefs'
import { useOnClickOutside } from '@/src/shared/utils/ui/useClickOutside'
import { DropdownContext } from '@/src/shared/ui/dropdown/DropdownContext'
import { DropdownArrow } from '@/src/shared/ui/dropdown/DropdownArrow'
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
}

const COMPONENT_NAME = 'Dropdown'

export const Dropdown = forwardRef<any, DropdownProps>(
    (props, forwardedRef) => {
        const {
            containerEl,
            placement = 'bottom',
            offset = { x: 0, y: 10 },
            delay = { enter: 0, leave: 300 },
            withArrow = true,
            clickable = true,
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
                <DropdownTrigger>Dropdown</DropdownTrigger>

                <DropdownContent>
                    <Menu>
                        <Menu.Group>User</Menu.Group>
                        <Menu.Item>User Name</Menu.Item>
                        <Divider />
                        <Menu.Group>Actions</Menu.Group>
                        <Menu.Item>Delete</Menu.Item>
                        <Menu.Item>Edit</Menu.Item>
                        <Menu.Item>Create</Menu.Item>
                    </Menu>
                </DropdownContent>
            </DropdownContext.Provider>
        )
    },
)

Dropdown.displayName = COMPONENT_NAME
