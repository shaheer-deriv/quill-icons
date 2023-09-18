import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLibertyReserveBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLibertyReserveBrandDarkIcon',
  component: PaymentMethodLibertyReserveBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLibertyReserveBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLibertyReserveBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
