import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonpayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonpayBrandIcon',
  component: PaymentMethodDragonpayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonpayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonpayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
