import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIcbcBankWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIcbcBankWhiteIcon',
  component: PaymentMethodIcbcBankWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIcbcBankWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIcbcBankWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
