import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIwalletBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIwalletBrandIcon',
  component: PaymentMethodIwalletBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIwalletBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIwalletBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
