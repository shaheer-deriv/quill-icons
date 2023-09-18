import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLibertyReserveBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLibertyReserveBlackIcon',
  component: PaymentMethodLibertyReserveBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLibertyReserveBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLibertyReserveBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
