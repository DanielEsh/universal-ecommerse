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

export type DropdownProps = {
    containerEl?: HTMLElement
}

const COMPONENT_NAME = 'Dropdown'

export const Dropdown = forwardRef<HTMLElement, DropdownProps>(
    (props, forwardedRef) => {
        const { containerEl } = props

        const [open, setOpen] = useState(false)
        // const { x, y, reference, floating, strategy } = useFloating({
        //     open,
        //     onOpenChange: setOpen,
        //     placement: 'top',
        //     middleware: [flip()],
        // })

        const { styles, reference, floating } = usePopover({
            placement: 'right',
            offset: { x: 0, y: 5 },
            isVisible: open,
        })

        return (
            <>
                <button ref={reference} onClick={() => setOpen(!open)}>
                    Dropdown
                </button>
                {open && (
                    <Portal container={containerEl}>
                        <div ref={floating} style={styles}>
                            Tooltip
                        </div>
                    </Portal>
                )}
            </>
        )
    },
)

Dropdown.displayName = COMPONENT_NAME
