import { ReactNode, useRef, useState, MouseEvent } from 'react'
import { clsx } from 'clsx'
import { useEventListener } from '../../hooks/useEventListener'
import {
  getOffset,
  getWidth,
  getHeight,
  getOuterWidth,
  getOuterHeight,
} from '../../utils/dom'

export type RippleProps = {
  children?: ReactNode
}

export const Ripple = ({ children }: RippleProps) => {
  const [effect, setEffect] = useState(false)
  const targetRef = useRef<HTMLDivElement | null>(null)
  const rippleRef = useRef<HTMLElement | null>(null)

  const onMouseDown = (event: MouseEvent) => {
    if (!targetRef.current) return

    const offset = getOffset(targetRef.current)
    const offsetX =
      event.pageX -
      offset.left +
      document.body.scrollTop -
      getWidth(rippleRef.current) / 2
    const offsetY =
      event.pageY -
      offset.top +
      document.body.scrollLeft -
      getHeight(rippleRef.current) / 2

    activateRipple(offsetX, offsetY)
  }

  const activateRipple = (offsetX: number, offsetY: number) => {
    if (!rippleRef.current) {
      return
    }

    setEffect(false)

    if (!getHeight(rippleRef.current) && !getWidth(rippleRef.current)) {
      const maxRippleValue = Math.max(
        getOuterWidth(targetRef.current),
        getOuterHeight(targetRef.current),
      )

      rippleRef.current.style.height = `${maxRippleValue}px`
      rippleRef.current.style.width = `${maxRippleValue}px`
    }

    rippleRef.current.style.top = offsetY + 'px'
    rippleRef.current.style.left = offsetX + 'px'
    setEffect(true)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEventListener('mousedown', onMouseDown)

  const onAnimationEnd = () => {
    setEffect(false)
  }

  const classes = clsx('ripple-effect absolute block rounded-full', {
    'animate-ripple': effect,
  })

  return (
    <div ref={targetRef} className="ripple-root w-24 h-24 bg-primary-500">
      {children}
      <span
        role="presentation"
        ref={rippleRef}
        className={classes}
        onAnimationEnd={onAnimationEnd}
      />
    </div>
  )
}
