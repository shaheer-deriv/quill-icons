import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodApplePayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodApplePayBrandIcon',
  component: PaymentMethodApplePayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodApplePayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodApplePayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
