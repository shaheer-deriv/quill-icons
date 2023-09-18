import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCreditDebitBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCreditDebitBrandDarkIcon',
  component: PaymentMethodCreditDebitBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCreditDebitBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCreditDebitBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
