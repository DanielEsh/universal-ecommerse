/**
 * <Dropdown>
 *   <Dropdown.Trigger />
 *   <Dropdown.Menu>
 *      <Dropdown.Arrow />
 *      <Dropdown.Title>Variants:</Dropdown.Title>
 *      <Dropdown.Item key="new" disabled>New file</Dropdown.Item>
 *      <Dropdown.Item key="copy">Copy link</Dropdown.Item>
 *      <Dropdown.Item key="edit">Edit file</Dropdown.Item>
 *      <Divider />
 *      <Dropdown.Item key="delete">
 *           Delete file
 *      </Dropdown.Item>
 *   </Dropdown.Menu>
 *
 *   <Menu.Group>Category 1</Menu.Group>
 *   <Menu.Item value={1}>Option 1</Menu.Item>
 *   <Menu.Item value={2}>Option 2</Menu.Item>
 *   <Menu.Group>Category 2</Menu.Group>
 *   <Menu.Item value={3}>Option 3</Menu.Item>
 *   <Menu.Item value={4}>Option 4</Menu.Item>
 */
import { forwardRef, ReactNode, useState, useRef } from 'react'
import type { Placement } from '@floating-ui/react-dom-interactions'
import { usePopover } from '@/src/shared/ui/dropdown/usePopover'
import { Portal } from '@/src/shared/ui/Portal'
import { Menu } from '@/src/shared/ui/dropdown/Menu'
import { Divider } from '@/src/shared/ui/Divider/Divider'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { motion } = require('framer-motion')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AnimatePresence } = require('framer-motion')
import { composeRefs } from '@/src/shared/utils/ui/compose-refs/composeRefs'
import { useOnClickOutside } from '@/src/shared/utils/ui/useClickOutside'

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

const fade = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
    },
}

export const Dropdown = forwardRef<any, DropdownProps>(
    (props, forwardedRef) => {
        const {
            containerEl,
            placement = 'bottom',
            offset = { x: 0, y: 10 },
            delay = { enter: 300, leave: 300 },
            withArrow = true,
            clickable = true,
        } = props

        const { enter: enterDelay, leave: leaveDelay } = delay

        const [timeout, setCloseTimout] = useState<any>(null)

        const dropdownRef = useRef<any>(null)
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

        useOnClickOutside(dropdownRef, () => onOpenChange(false))

        const showPopover = () => {
            if (document.activeElement) activeElement = document.activeElement

            setTimeout(() => {
                onOpenChange(true)
            }, enterDelay)
        }

        const hidePopover = () => {
            const timeout = setTimeout(() => {
                onOpenChange(false)
                if (activeElement) activeElement.focus()
            }, leaveDelay)
            setCloseTimout(timeout)
        }

        const handleReferenceClick = () => {
            if (clickable) {
                showPopover()
            }
        }

        const handleReferenceMouseEnter = () => {
            if (!clickable) {
                showPopover()
            }
        }

        const handleReferenceMouseLeave = () => {
            if (!clickable) {
                hidePopover()
            }
        }

        const handleFloatingEnter = () => {
            if (clickable) return
            clearTimeout(timeout)
        }

        const handleFloatingLeave = () => {
            if (clickable) return
            hidePopover()
        }

        return (
            <div ref={dropdownRef}>
                <button
                    ref={composeRefs(forwardedRef, reference)}
                    onClick={handleReferenceClick}
                    onMouseEnter={handleReferenceMouseEnter}
                    onMouseLeave={handleReferenceMouseLeave}>
                    Dropdown
                </button>
                {open && (
                    <Portal container={containerEl}>
                        <motion.div variants={fade} {...fade}>
                            <div
                                ref={floating}
                                style={popoverStyles}
                                onMouseEnter={handleFloatingEnter}
                                onMouseLeave={handleFloatingLeave}>
                                <Menu>
                                    <Menu.Group>User</Menu.Group>
                                    <Menu.Item>User Name</Menu.Item>
                                    <Divider />
                                    <Menu.Group>Actions</Menu.Group>
                                    <Menu.Item>Delete</Menu.Item>
                                    <Menu.Item>Edit</Menu.Item>
                                    <Menu.Item>Create</Menu.Item>
                                </Menu>
                                {withArrow && (
                                    <div
                                        ref={arrowRef}
                                        className="arrow"
                                        style={arrowStyles}
                                    />
                                )}
                            </div>
                        </motion.div>
                    </Portal>
                )}
            </div>
        )
    },
)

Dropdown.displayName = COMPONENT_NAME
