import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUsdCoinBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUsdCoinBrandIcon',
  component: PaymentMethodUsdCoinBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUsdCoinBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUsdCoinBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
