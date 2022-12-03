import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

export const toggleSidebar = createEvent()

export const $sidebar = createStore(true).on(toggleSidebar, (state) => !state)

export const useSidebar = () => {
  return useStore($sidebar)
}
