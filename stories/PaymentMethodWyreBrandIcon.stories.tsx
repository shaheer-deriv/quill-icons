import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWyreBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWyreBrandIcon',
  component: PaymentMethodWyreBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWyreBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWyreBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
