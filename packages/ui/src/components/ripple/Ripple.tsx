import { ReactNode, useRef, useState, useEffect, MouseEvent } from 'react'
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

const addClass = (element, className) => {
  if (element && className) {
    if (element.classList) element.classList.add(className)
    else element.className += ' ' + className
  }
}

const removeClass = (element, className) => {
  if (element && className) {
    if (element.classList) element.classList.remove(className)
    else
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi',
        ),
        ' ',
      )
  }
}

export const Ripple = ({ children }: RippleProps) => {
  const [effect, setEffect] = useState(false)
  const targetRef = useRef<HTMLElement | null>(null)
  const rippleRef = useRef<HTMLElement | null>(null)

  const getTargetElement = () => {
    return rippleRef.current && rippleRef.current.parentElement
  }

  const onMouseDown = (event: MouseEvent) => {
    if (!targetRef.current) return

    if (event.target !== getTargetElement()) {
      return
    }

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

    removeClass(rippleRef.current, 'animate-ripple')

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

    addClass(rippleRef.current, 'animate-ripple')
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEventListener('mousedown', onMouseDown)

  useEffect(() => {
    targetRef.current = getTargetElement()
  }, [])

  const onAnimationEnd = (event) => {
    removeClass(event.currentTarget, 'animate-ripple')
  }

  const classes = clsx('ripple-effect absolute block rounded-full', {
    'animate-ripple': effect,
  })

  return (
    <span
      role="presentation"
      ref={rippleRef}
      className={classes}
      onAnimationEnd={onAnimationEnd}
    />
  )
}
