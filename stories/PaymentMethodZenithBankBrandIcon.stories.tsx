import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZenithBankBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZenithBankBrandIcon',
  component: PaymentMethodZenithBankBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZenithBankBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZenithBankBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
