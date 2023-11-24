import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod10CoinsWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethod10CoinsWhiteIcon',
  component: PaymentMethod10CoinsWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod10CoinsWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod10CoinsWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
