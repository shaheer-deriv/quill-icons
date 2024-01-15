import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod1voucherBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethod1voucherBlackIcon',
  component: PaymentMethod1voucherBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod1voucherBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod1voucherBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
