import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

export const toggleSidebarFx = createEvent<boolean>()

export const $isSidebarToggled = createStore(true)

$isSidebarToggled.on(toggleSidebarFx, (state) => !state)

export const useMainStore = () => {
  return useStore($isSidebarToggled)
}
