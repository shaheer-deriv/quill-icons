import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInternetBankTransferBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInternetBankTransferBrandDarkIcon',
  component: PaymentMethodInternetBankTransferBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInternetBankTransferBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInternetBankTransferBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
