import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinCashBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinCashBrandDarkIcon',
  component: PaymentMethodBitcoinCashBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinCashBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinCashBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
