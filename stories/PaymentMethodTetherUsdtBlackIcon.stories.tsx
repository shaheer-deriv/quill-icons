import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTetherUsdtBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTetherUsdtBlackIcon',
  component: PaymentMethodTetherUsdtBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTetherUsdtBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTetherUsdtBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
