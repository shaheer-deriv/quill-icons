import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWebmoneyBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWebmoneyBlackIcon',
  component: PaymentMethodWebmoneyBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWebmoneyBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWebmoneyBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
