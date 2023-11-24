import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIcbcBankBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIcbcBankBrandIcon',
  component: PaymentMethodIcbcBankBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIcbcBankBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIcbcBankBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
