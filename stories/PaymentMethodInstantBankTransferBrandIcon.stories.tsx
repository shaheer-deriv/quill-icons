import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInstantBankTransferBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInstantBankTransferBrandIcon',
  component: PaymentMethodInstantBankTransferBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInstantBankTransferBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInstantBankTransferBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
