import { FC, PropsWithChildren } from 'react'

export function createSlot(name): FC<PropsWithChildren> {
  console.log('createSlot', name)
  const Slot = () => null

  Slot.displayName = `Slot(${name})`
  Slot.__slotName = name

  return Slot
}
