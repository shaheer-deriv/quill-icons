import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUsdCoinBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUsdCoinBrandDarkIcon',
  component: PaymentMethodUsdCoinBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUsdCoinBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUsdCoinBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
