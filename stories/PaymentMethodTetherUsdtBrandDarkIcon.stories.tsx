import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTetherUsdtBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTetherUsdtBrandDarkIcon',
  component: PaymentMethodTetherUsdtBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTetherUsdtBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTetherUsdtBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
