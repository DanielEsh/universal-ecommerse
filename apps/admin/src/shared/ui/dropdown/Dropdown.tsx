/**
 * <Dropdown.Provider>
 *     <Dropdown.Root>
 *       <Dropdown.Trigger />
 *       <Dropdown.Portal>
 *         <Dropdown.Content>
 *           <Dropdown.Arrow />
 *         </Dropdown.Content>
 *       </Dropdown.Portal>
 *     </Dropdown.Root>
 *   </Dropdown.Provider>
 */
import { forwardRef, ReactNode, useRef } from 'react'

export type DropdownProps = {}

const COMPONENT_NAME = 'Dropdown'

export const Dropdown = forwardRef<HTMLElement, DropdownProps>(
    (props, forwardedRef) => {
        return <div>Dropdown</div>
    },
)

Dropdown.displayName = COMPONENT_NAME
