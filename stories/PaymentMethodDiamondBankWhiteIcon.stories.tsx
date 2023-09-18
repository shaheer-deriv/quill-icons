import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiamondBankWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDiamondBankWhiteIcon',
  component: PaymentMethodDiamondBankWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiamondBankWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiamondBankWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
