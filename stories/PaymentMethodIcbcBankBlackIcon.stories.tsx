import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIcbcBankBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIcbcBankBlackIcon',
  component: PaymentMethodIcbcBankBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIcbcBankBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIcbcBankBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
