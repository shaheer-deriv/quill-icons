import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEWalletBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEWalletBrandIcon',
  component: PaymentMethodEWalletBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEWalletBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEWalletBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
