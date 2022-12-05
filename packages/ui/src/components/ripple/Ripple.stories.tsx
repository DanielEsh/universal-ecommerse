

import { Meta } from '@storybook/react';

import { Ripple } from './Ripple';

export default {
    title: 'Misc/Ripple',
    component: Ripple,
} as Meta;

const Default = () => {
    <Ripple />
}

export { default as Default } from './__examples__/Default';