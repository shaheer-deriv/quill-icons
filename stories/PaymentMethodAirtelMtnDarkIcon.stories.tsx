import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelMtnDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtelMtnDarkIcon',
  component: PaymentMethodAirtelMtnDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelMtnDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelMtnDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
