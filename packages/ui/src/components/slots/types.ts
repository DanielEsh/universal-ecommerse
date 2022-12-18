import { FC, PropsWithChildren, ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export interface SlotComponent<T = {}> extends FC<PropsWithChildren<T>> {
  /**
   * @internal
   */
  __slotName: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface SlotItem<T = {}> {
  name: string
  props: PropsWithChildren<T>
  rendered: ReactNode
}
