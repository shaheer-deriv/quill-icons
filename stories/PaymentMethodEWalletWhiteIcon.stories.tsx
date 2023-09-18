import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEWalletWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEWalletWhiteIcon',
  component: PaymentMethodEWalletWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEWalletWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEWalletWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
