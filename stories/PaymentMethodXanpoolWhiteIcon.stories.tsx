import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXanpoolWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXanpoolWhiteIcon',
  component: PaymentMethodXanpoolWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXanpoolWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXanpoolWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
