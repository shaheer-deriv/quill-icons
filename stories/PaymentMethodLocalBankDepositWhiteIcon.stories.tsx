import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalBankDepositWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodLocalBankDepositWhiteIcon',
  component: PaymentMethodLocalBankDepositWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalBankDepositWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalBankDepositWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
