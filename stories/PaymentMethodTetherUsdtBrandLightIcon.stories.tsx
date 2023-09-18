import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTetherUsdtBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTetherUsdtBrandLightIcon',
  component: PaymentMethodTetherUsdtBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTetherUsdtBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTetherUsdtBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
