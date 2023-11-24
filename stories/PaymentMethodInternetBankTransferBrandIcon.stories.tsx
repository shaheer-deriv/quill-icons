import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInternetBankTransferBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInternetBankTransferBrandIcon',
  component: PaymentMethodInternetBankTransferBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInternetBankTransferBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInternetBankTransferBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
