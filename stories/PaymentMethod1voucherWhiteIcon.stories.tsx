import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod1voucherWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethod1voucherWhiteIcon',
  component: PaymentMethod1voucherWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod1voucherWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod1voucherWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
