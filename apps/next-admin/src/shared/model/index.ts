import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

export const toggleSidebar = createEvent()

export const $sidebar = createStore(false).on(toggleSidebar, (state) => !state)

export const useSidebar = () => {
  return useStore($sidebar)
}
