import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZingpayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZingpayBrandIcon',
  component: PaymentMethodZingpayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZingpayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZingpayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
