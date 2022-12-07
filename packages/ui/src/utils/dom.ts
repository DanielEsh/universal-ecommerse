export const getOffset = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()

  return {
    top:
      rect.top +
      (window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0),
    left:
      rect.left +
      (window.screenX ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0),
  }
}

export const getOuterWidth = (element: HTMLElement) =>
  element.offsetWidth || element.getBoundingClientRect().width

export const getOuterHeight = (element: HTMLElement) =>
  element.offsetHeight || element.getBoundingClientRect().height

export const getHeight = (element: HTMLElement) => {
  let height = element.offsetHeight
  const style = getComputedStyle(element)

  height -=
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom) +
    parseFloat(style.borderTopWidth) +
    parseFloat(style.borderBottomWidth)

  return height
}

export const getWidth = (element: HTMLElement) => {
  let width = element.offsetWidth
  const style = getComputedStyle(element)

  width -=
    parseFloat(style.paddingLeft) +
    parseFloat(style.paddingRight) +
    parseFloat(style.borderLeftWidth) +
    parseFloat(style.borderRightWidth)

  return width
}
