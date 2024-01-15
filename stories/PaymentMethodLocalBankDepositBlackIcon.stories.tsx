import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalBankDepositBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodLocalBankDepositBlackIcon',
  component: PaymentMethodLocalBankDepositBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalBankDepositBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalBankDepositBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
