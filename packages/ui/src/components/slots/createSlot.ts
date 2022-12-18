import { FC, PropsWithChildren } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export function createSlot<T = {}>(name = 'unknown'): FC<PropsWithChildren<T>> {
  const Slot = () => null

  Slot.displayName = `Slot(${name})`
  Slot.__slotName = name

  return Slot
}
