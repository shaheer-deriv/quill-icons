import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIwalletWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIwalletWhiteIcon',
  component: PaymentMethodIwalletWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIwalletWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIwalletWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
