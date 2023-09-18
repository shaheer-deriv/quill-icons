import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtmWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtmWhiteIcon',
  component: PaymentMethodAirtmWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtmWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtmWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
