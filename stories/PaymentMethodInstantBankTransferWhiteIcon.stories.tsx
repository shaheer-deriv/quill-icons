import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInstantBankTransferWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInstantBankTransferWhiteIcon',
  component: PaymentMethodInstantBankTransferWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInstantBankTransferWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInstantBankTransferWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
