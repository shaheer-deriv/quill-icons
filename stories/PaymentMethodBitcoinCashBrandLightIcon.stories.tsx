import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinCashBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinCashBrandLightIcon',
  component: PaymentMethodBitcoinCashBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinCashBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinCashBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
