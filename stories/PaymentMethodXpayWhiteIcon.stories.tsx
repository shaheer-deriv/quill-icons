import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXpayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXpayWhiteIcon',
  component: PaymentMethodXpayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXpayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXpayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
