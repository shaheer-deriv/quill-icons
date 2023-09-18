import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSticpayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSticpayBlackIcon',
  component: PaymentMethodSticpayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSticpayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSticpayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
