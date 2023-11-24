import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelMtnBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtelMtnBrandIcon',
  component: PaymentMethodAirtelMtnBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelMtnBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelMtnBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
