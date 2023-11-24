import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod10CoinsBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethod10CoinsBrandIcon',
  component: PaymentMethod10CoinsBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod10CoinsBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod10CoinsBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
