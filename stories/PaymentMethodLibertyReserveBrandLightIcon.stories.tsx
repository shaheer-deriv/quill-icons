import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLibertyReserveBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLibertyReserveBrandLightIcon',
  component: PaymentMethodLibertyReserveBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLibertyReserveBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLibertyReserveBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
