import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInstantBankTransferBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInstantBankTransferBlackIcon',
  component: PaymentMethodInstantBankTransferBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInstantBankTransferBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInstantBankTransferBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
