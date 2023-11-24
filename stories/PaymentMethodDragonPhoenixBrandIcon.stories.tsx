import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonPhoenixBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonPhoenixBrandIcon',
  component: PaymentMethodDragonPhoenixBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonPhoenixBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonPhoenixBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
