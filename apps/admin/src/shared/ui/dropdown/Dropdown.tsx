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
import { useFloating } from '@floating-ui/react-dom-interactions'

export type DropdownProps = {}

const COMPONENT_NAME = 'Dropdown'

export const Dropdown = forwardRef<HTMLElement, DropdownProps>(
    (props, forwardedRef) => {
        const [open, setOpen] = useState(false)
        const { x, y, reference, floating, strategy } = useFloating({
            open,
            onOpenChange: setOpen,
            placement: 'top',
        })

        return (
            <>
                <button ref={reference} onClick={() => setOpen(!open)}>
                    Dropdown
                </button>
                {open && (
                    <div
                        ref={floating}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                        }}>
                        Tooltip
                    </div>
                )}
            </>
        )
    },
)

Dropdown.displayName = COMPONENT_NAME
