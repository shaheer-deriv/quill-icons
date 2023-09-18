import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinWhiteIcon',
  component: PaymentMethodBitcoinWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
