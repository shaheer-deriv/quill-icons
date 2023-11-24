import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPixBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPixBlackIcon',
  component: PaymentMethodPixBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPixBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPixBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
