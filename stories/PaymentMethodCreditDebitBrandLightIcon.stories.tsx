import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCreditDebitBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCreditDebitBrandLightIcon',
  component: PaymentMethodCreditDebitBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCreditDebitBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCreditDebitBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
