import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinCashWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinCashWhiteIcon',
  component: PaymentMethodBitcoinCashWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinCashWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinCashWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
