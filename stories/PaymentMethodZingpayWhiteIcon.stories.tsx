import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZingpayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZingpayWhiteIcon',
  component: PaymentMethodZingpayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZingpayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZingpayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
