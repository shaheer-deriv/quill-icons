import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinBlackIcon',
  component: PaymentMethodBitcoinBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
