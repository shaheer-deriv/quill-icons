import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCreditDebitBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCreditDebitBlackIcon',
  component: PaymentMethodCreditDebitBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCreditDebitBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCreditDebitBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
