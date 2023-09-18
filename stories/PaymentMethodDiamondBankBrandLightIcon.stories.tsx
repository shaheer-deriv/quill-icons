import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiamondBankBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDiamondBankBrandLightIcon',
  component: PaymentMethodDiamondBankBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiamondBankBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiamondBankBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
