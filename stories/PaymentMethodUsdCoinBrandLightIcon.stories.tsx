import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUsdCoinBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUsdCoinBrandLightIcon',
  component: PaymentMethodUsdCoinBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUsdCoinBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUsdCoinBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
