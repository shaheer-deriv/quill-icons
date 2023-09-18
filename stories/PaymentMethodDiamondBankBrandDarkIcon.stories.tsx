import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiamondBankBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDiamondBankBrandDarkIcon',
  component: PaymentMethodDiamondBankBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiamondBankBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiamondBankBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
