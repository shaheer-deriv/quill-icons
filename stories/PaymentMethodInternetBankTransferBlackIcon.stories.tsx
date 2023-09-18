import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInternetBankTransferBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInternetBankTransferBlackIcon',
  component: PaymentMethodInternetBankTransferBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInternetBankTransferBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInternetBankTransferBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
