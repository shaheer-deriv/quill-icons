import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinBrandIcon',
  component: PaymentMethodBitcoinBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
