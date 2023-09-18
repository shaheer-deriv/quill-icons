import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLibertyReserveWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLibertyReserveWhiteIcon',
  component: PaymentMethodLibertyReserveWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLibertyReserveWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLibertyReserveWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
