import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEWalletBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEWalletBrandDarkIcon',
  component: PaymentMethodEWalletBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEWalletBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEWalletBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
