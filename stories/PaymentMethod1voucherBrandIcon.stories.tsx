import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod1voucherBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethod1voucherBrandIcon',
  component: PaymentMethod1voucherBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod1voucherBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod1voucherBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
