import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtmBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtmBlackIcon',
  component: PaymentMethodAirtmBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtmBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtmBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
