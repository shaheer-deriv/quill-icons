import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod1foryouBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethod1foryouBlackIcon',
  component: PaymentMethod1foryouBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod1foryouBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod1foryouBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
