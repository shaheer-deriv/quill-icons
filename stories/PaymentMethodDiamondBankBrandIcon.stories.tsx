import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiamondBankBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDiamondBankBrandIcon',
  component: PaymentMethodDiamondBankBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiamondBankBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiamondBankBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
