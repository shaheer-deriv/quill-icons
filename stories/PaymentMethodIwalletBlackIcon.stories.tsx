import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIwalletBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIwalletBlackIcon',
  component: PaymentMethodIwalletBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIwalletBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIwalletBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
