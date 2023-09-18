import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIcbcBankBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIcbcBankBrandDarkIcon',
  component: PaymentMethodIcbcBankBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIcbcBankBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIcbcBankBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
