import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIcbcBankBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIcbcBankBrandLightIcon',
  component: PaymentMethodIcbcBankBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIcbcBankBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIcbcBankBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
