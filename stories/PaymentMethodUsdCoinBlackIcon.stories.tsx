import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUsdCoinBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUsdCoinBlackIcon',
  component: PaymentMethodUsdCoinBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUsdCoinBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUsdCoinBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
