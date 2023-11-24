import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCreditDebitBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCreditDebitBrandIcon',
  component: PaymentMethodCreditDebitBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCreditDebitBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCreditDebitBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
