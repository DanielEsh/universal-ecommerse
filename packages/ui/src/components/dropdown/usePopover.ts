import { RefObject, useState, useRef } from 'react'
import {
    useFloating,
    flip,
    offset,
    Placement,
    autoUpdate,
    arrow,
} from '@floating-ui/react-dom'
// import {
//     useFloating,
//     flip,
//     offset,
//     type Placement,
// } from '@floating-ui/react-dom-interactions'

export type Offset = {
    x?: number
    y?: number
}

export type OptionsType = {
    placement?: Placement
    offset: Offset
    arrow?: any
}

export const usePopover = (options?: OptionsType) => {
    const [open, setOpen] = useState<boolean>(false)

    const {
        x,
        y,
        reference,
        floating,
        strategy,
        middlewareData: { arrow: { x: arrowX, y: arrowY, centerOffset } = {} },
    } = useFloating({
        placement: options?.placement,
        whileElementsMounted: (reference, floating, update) => {
            return autoUpdate(reference, floating, update, {
                animationFrame: true,
            })
        },
        middleware: [
            flip(),
            offset({
                mainAxis: options?.offset?.y,
                crossAxis: options?.offset?.x,
            }),
            arrow({ element: options?.arrow }),
        ],
    })

    // const { x, y, reference, floating, strategy } = useFloating({
    //     open,
    //     onOpenChange: setOpen,
    //     placement: options?.placement,
    //     middleware: [
    //         flip(),
    //         offset({
    //             mainAxis: options?.offset?.y,
    //             crossAxis: options?.offset?.x,
    //         }),
    //     ],
    // })

    const styles = {
        position: strategy,
        top: y ?? '',
        left: x ?? '',
    }

    console.log('ARROW', arrowX, arrowY, centerOffset)

    const currentPlacement = options?.placement
        ? options.placement.split('-')[0]
        : ''

    const staticSide: any = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
    }[currentPlacement]

    const arrowStyles = {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
    }

    // useEffect(() => {
    //     if (!refs.reference.current || !refs.floating.current) return
    //
    //     const parents = [
    //         ...getScrollParents(refs.reference.current),
    //         ...getScrollParents(refs.floating.current),
    //     ]
    //     parents.forEach((parent) => {
    //         parent.addEventListener('scroll', update)
    //         parent.addEventListener('resize', update)
    //     })
    //     return () => {
    //         parents.forEach((parent) => {
    //             parent.removeEventListener('scroll', update)
    //             parent.removeEventListener('resize', update)
    //         })
    //     }
    // }, [refs.reference, refs.floating, update, options?.isVisible])

    return {
        open,
        onOpenChange: setOpen,
        popoverStyles: styles,
        arrowStyles,
        reference,
        floating,
    }
}
