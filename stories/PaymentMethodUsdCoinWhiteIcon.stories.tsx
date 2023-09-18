import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUsdCoinWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUsdCoinWhiteIcon',
  component: PaymentMethodUsdCoinWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUsdCoinWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUsdCoinWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
