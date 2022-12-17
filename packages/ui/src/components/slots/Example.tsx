import { Story } from '@storybook/react'
import React, { FC, PropsWithChildren } from 'react'

import { createSlot } from './createSlot'
import { useSlots } from './useSlot'

const HeaderSlot = createSlot('header')
const FooterSlot = createSlot('footer')

const Example: FC<PropsWithChildren> = (props) => {
  const slots = useSlots(props)

  const header = slots.get(HeaderSlot)
  const footer = slots.get(FooterSlot)

  return (
    <div>
      <header>{header?.rendered}</header>

      <main>{slots.children}</main>

      <footer>{footer?.rendered}</footer>
    </div>
  )
}

const Default: Story = () => {
  return (
    <Example>
      <HeaderSlot>Header Slot</HeaderSlot>
      Body
      <FooterSlot>Footer Slot</FooterSlot>
    </Example>
  )
}

export default Default
