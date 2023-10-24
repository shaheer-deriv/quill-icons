import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelMtnBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtelMtnBlackIcon',
  component: PaymentMethodAirtelMtnBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelMtnBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelMtnBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
