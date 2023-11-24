import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTetherUsdtBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTetherUsdtBrandIcon',
  component: PaymentMethodTetherUsdtBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTetherUsdtBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTetherUsdtBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
