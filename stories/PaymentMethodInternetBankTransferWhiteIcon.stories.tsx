import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInternetBankTransferWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInternetBankTransferWhiteIcon',
  component: PaymentMethodInternetBankTransferWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInternetBankTransferWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInternetBankTransferWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
