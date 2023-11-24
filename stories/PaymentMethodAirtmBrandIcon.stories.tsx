import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtmBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtmBrandIcon',
  component: PaymentMethodAirtmBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtmBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtmBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
