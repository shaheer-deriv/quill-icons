import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCreditDebitWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCreditDebitWhiteIcon',
  component: PaymentMethodCreditDebitWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCreditDebitWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCreditDebitWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
