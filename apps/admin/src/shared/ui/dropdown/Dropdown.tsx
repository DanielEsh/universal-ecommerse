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
// import { useFloating, flip } from '@floating-ui/react-dom-interactions'
import { usePopover } from '@/src/shared/ui/dropdown/usePopover'
import { Portal } from '@/src/shared/ui/Portal'
import { Menu } from '@/src/shared/ui/dropdown/Menu'
import { Divider } from '@/src/shared/ui/Divider/Divider'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { motion } = require('framer-motion')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AnimatePresence } = require('framer-motion')

export type DropdownProps = {
    containerEl?: HTMLElement
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

export const Dropdown = forwardRef<HTMLElement, DropdownProps>(
    (props, forwardedRef) => {
        const { containerEl } = props

        const arrowRef = useRef(null)
        // const { x, y, reference, floating, strategy } = useFloating({
        //     open,
        //     onOpenChange: setOpen,
        //     placement: 'top',
        //     middleware: [flip()],
        // })

        const {
            open,
            onOpenChange,
            reference,
            floating,
            popoverStyles,
            arrowStyles,
        } = usePopover({
            placement: 'bottom',
            arrow: arrowRef,
            offset: { x: 0, y: 10 },
        })

        return (
            <>
                <button ref={reference} onClick={() => onOpenChange(!open)}>
                    Dropdown
                </button>
                {open && (
                    <Portal container={containerEl}>
                        <motion.div variants={fade} {...fade}>
                            <div ref={floating} style={popoverStyles}>
                                <Menu>
                                    <Menu.Group>User</Menu.Group>
                                    <Menu.Item>User Name</Menu.Item>
                                    <Divider />
                                    <Menu.Group>Actions</Menu.Group>
                                    <Menu.Item>Delete</Menu.Item>
                                    <Menu.Item>Edit</Menu.Item>
                                    <Menu.Item>Create</Menu.Item>
                                </Menu>
                                <div
                                    ref={arrowRef}
                                    className="arrow"
                                    style={arrowStyles}
                                />
                            </div>
                        </motion.div>
                    </Portal>
                )}
            </>
        )
    },
)

Dropdown.displayName = COMPONENT_NAME
