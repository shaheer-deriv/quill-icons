import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinCashBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinCashBrandIcon',
  component: PaymentMethodBitcoinCashBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinCashBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinCashBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
