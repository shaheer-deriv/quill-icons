import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonpayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonpayWhiteIcon',
  component: PaymentMethodDragonpayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonpayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonpayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
