import { useRef, useState, useEffect } from 'react'
import { clsx } from 'clsx'
import { useEventListener } from '../../hooks/useEventListener'

const getOffset = (el) => {
  if (el) {
    const rect = el.getBoundingClientRect()

    return {
      top:
        rect.top +
        (window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0),
      left:
        rect.left +
        (window.pageXOffset ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          0),
    }
  }

  return {
    top: 'auto',
    left: 'auto',
  }
}

const getHeight = (el) => {
  if (el) {
    let height = el.offsetHeight
    const style = getComputedStyle(el)

    height -=
      parseFloat(style.paddingTop) +
      parseFloat(style.paddingBottom) +
      parseFloat(style.borderTopWidth) +
      parseFloat(style.borderBottomWidth)

    return height
  }

  return 0
}

const getWidth = (el) => {
  if (el) {
    let width = el.offsetWidth
    const style = getComputedStyle(el)

    width -=
      parseFloat(style.paddingLeft) +
      parseFloat(style.paddingRight) +
      parseFloat(style.borderLeftWidth) +
      parseFloat(style.borderRightWidth)

    return width
  }

  return 0
}

const getOuterWidth = (el, margin?) => {
  if (el) {
    let width = el.offsetWidth || el.getBoundingClientRect().width

    if (margin) {
      const style = getComputedStyle(el)

      width += parseFloat(style.marginLeft) + parseFloat(style.marginRight)
    }

    return width
  }

  return 0
}

const getOuterHeight = (el, margin?) => {
  if (el) {
    let height = el.offsetHeight || el.getBoundingClientRect().height

    if (margin) {
      const style = getComputedStyle(el)

      height += parseFloat(style.marginTop) + parseFloat(style.marginBottom)
    }

    return height
  }

  return 0
}

export const Ripple = () => {
  const [effect, setEffect] = useState(false)
  const targetRef = useRef(null)
  const rippleRef = useRef(null)

  const bindEvents = () => {
    if (targetRef.current) {
      targetRef.current.addEventListener('mousedown', onMouseDown)
    }
  }

  const unbindEvents = () => {
    if (targetRef.current) {
      targetRef.current.removeEventListener('mousedown', onMouseDown)
    }
  }

  const onMouseDown = (event) => {
    console.log('onMouseDown')
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

  const activateRipple = (offsetX, offsetY) => {
    if (!rippleRef.current) {
      return
    }
    console.log('activateRipple', offsetX, offsetY)
    setEffect(false)

    if (!getHeight(rippleRef.current) && !getWidth(rippleRef.current)) {
      const d = Math.max(
        getOuterWidth(targetRef.current),
        getOuterHeight(targetRef.current),
      )

      console.log('D', d);

      rippleRef.current.style.height = d + 'px'
      rippleRef.current.style.width = d + 'px'
    }

    rippleRef.current.style.top = offsetY + 'px'
    rippleRef.current.style.left = offsetX + 'px'
    setEffect(true)
  }

  useEffect(() => {
    bindEvents()

    return () => {
      unbindEvents()
    }
  }, [])

  const onAnimationEnd = () => {
    setEffect(false)
  }

  const classes = clsx('ripple', {
    'ripple-active': effect,
  })

  return (
    <div
      ref={targetRef}
      className="relative overflow-hidden w-24 h-24 bg-primary-500">
      Ripple
      <span
        role="presentation"
        ref={rippleRef}
        className={classes}
        onAnimationEnd={onAnimationEnd}
      />
    </div>
  )
}
