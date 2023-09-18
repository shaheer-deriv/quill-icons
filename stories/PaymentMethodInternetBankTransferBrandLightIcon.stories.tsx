import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInternetBankTransferBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInternetBankTransferBrandLightIcon',
  component: PaymentMethodInternetBankTransferBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInternetBankTransferBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInternetBankTransferBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
