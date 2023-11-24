import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTronBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTronBrandIcon',
  component: PaymentMethodTronBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTronBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTronBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
