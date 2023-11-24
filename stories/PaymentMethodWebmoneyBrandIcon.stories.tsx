import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWebmoneyBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWebmoneyBrandIcon',
  component: PaymentMethodWebmoneyBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWebmoneyBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWebmoneyBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
