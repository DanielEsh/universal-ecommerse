import {
  ReactNode,
  useRef,
  useState,
  useEffect,
  MouseEvent,
  useContext,
} from 'react'
import { clsx } from 'clsx'
import { useEventListener } from '../../hooks/useEventListener'
import {
  getOffset,
  getWidth,
  getHeight,
  getOuterWidth,
  getOuterHeight,
} from '../../utils/dom'
import {
  RippleContext,
  type RippleContextType,
} from '@/components/ripple/RippleContext'

export type RippleProps = {
  className?: string
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

/**
 * <Ripple.Container>
 *
 * <Ripple />
 * </Ripple.Container>
 */

export const RippleContainer = ({ children, className }: RippleProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const context: RippleContextType = {
    color: 'primary',
    containerRef,
  }

  const classes = clsx('ripple-root', className)

  return (
    <RippleContext.Provider value={context}>
      <div ref={containerRef} className={classes}>
        {children}
      </div>
    </RippleContext.Provider>
  )
}

export const RippleRoot = ({ children }: RippleProps) => {
  const [effect, setEffect] = useState(false)
  const rippleRef = useRef<HTMLElement | null>(null)

  const getTargetElement = () => {
    return rippleRef.current && rippleRef.current.parentElement
  }

  const { color, containerRef } = useContext<RippleContextType>(RippleContext)

  const onMouseDown = (event: MouseEvent) => {
    if (!containerRef.current) return

    if (event.target !== getTargetElement()) {
      return
    }

    const offset = getOffset(containerRef.current)
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
        getOuterWidth(containerRef.current),
        getOuterHeight(containerRef.current),
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

  // useEffect(() => {
  //   targetRef.current = getTargetElement()
  // }, [])

  const onAnimationEnd = () => {
    setEffect(false)
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

export const Ripple = Object.assign(RippleRoot, {
  Container: RippleContainer,
})
