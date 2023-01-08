import { Meta } from '@storybook/react'

import { BaseButton } from './Button'

export default {
  title: 'Components/Button',
  component: BaseButton,
} as Meta

export { default as Default } from './__examples__/Default'
export { default as Variant } from './__examples__/Variant'
export { default as ButtonGroup } from './__examples__/ButtonGroup'
export { default as Colors } from './__examples__/Colors'
export { default as Example } from '../slots/Example'
