import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTetherUsdtWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTetherUsdtWhiteIcon',
  component: PaymentMethodTetherUsdtWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTetherUsdtWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTetherUsdtWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
