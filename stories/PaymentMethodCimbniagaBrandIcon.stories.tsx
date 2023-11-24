import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCimbniagaBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCimbniagaBrandIcon',
  component: PaymentMethodCimbniagaBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCimbniagaBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCimbniagaBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
