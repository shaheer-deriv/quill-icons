import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZingpayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZingpayBlackIcon',
  component: PaymentMethodZingpayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZingpayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZingpayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
