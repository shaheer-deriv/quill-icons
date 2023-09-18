import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelMtnWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtelMtnWhiteIcon',
  component: PaymentMethodAirtelMtnWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelMtnWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelMtnWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
