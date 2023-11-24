import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXpayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXpayBrandIcon',
  component: PaymentMethodXpayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXpayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXpayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
