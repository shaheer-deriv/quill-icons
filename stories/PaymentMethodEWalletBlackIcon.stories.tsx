import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEWalletBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEWalletBlackIcon',
  component: PaymentMethodEWalletBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEWalletBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEWalletBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
