import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSticpayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSticpayBrandIcon',
  component: PaymentMethodSticpayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSticpayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSticpayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
