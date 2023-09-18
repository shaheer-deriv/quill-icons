import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSticpayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSticpayWhiteIcon',
  component: PaymentMethodSticpayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSticpayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSticpayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
