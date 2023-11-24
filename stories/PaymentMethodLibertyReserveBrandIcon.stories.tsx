import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLibertyReserveBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLibertyReserveBrandIcon',
  component: PaymentMethodLibertyReserveBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLibertyReserveBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLibertyReserveBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
