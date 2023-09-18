import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEWalletBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEWalletBrandLightIcon',
  component: PaymentMethodEWalletBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEWalletBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEWalletBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
