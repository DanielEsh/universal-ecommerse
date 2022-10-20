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
 */
import { forwardRef, ReactNode, useState, useRef } from 'react'
// import { useFloating, flip } from '@floating-ui/react-dom-interactions'
import { usePopover } from '@/src/shared/ui/dropdown/usePopover'
import { Portal } from '@/src/shared/ui/Portal'
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

        // const { x, y, reference, floating, strategy } = useFloating({
        //     open,
        //     onOpenChange: setOpen,
        //     placement: 'top',
        //     middleware: [flip()],
        // })

        const { open, onOpenChange, reference, floating, popoverStyles } =
            usePopover({
                placement: 'right',
                offset: { x: 0, y: 5 },
            })

        return (
            <>
                <button ref={reference} onClick={() => onOpenChange(!open)}>
                    Dropdown
                </button>
                {open && (
                    <Portal container={containerEl}>
                        <motion.div variants={fade} {...fade}>
                            <div
                                ref={floating}
                                className="bg-primary-500 py-2 px-5 rounded-md"
                                style={popoverStyles}>
                                Tooltip
                            </div>
                        </motion.div>
                    </Portal>
                )}
            </>
        )
    },
)

Dropdown.displayName = COMPONENT_NAME
