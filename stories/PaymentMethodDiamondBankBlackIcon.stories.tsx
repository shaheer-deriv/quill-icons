import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiamondBankBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDiamondBankBlackIcon',
  component: PaymentMethodDiamondBankBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiamondBankBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiamondBankBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
