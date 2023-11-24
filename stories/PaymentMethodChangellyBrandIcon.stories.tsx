import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChangellyBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChangellyBrandIcon',
  component: PaymentMethodChangellyBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChangellyBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChangellyBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
