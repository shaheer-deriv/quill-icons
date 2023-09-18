import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinCashBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinCashBlackIcon',
  component: PaymentMethodBitcoinCashBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinCashBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinCashBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
