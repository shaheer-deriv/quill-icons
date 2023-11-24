import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDaiBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDaiBrandIcon',
  component: PaymentMethodDaiBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDaiBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDaiBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
