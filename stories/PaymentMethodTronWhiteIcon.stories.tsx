import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTronWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTronWhiteIcon',
  component: PaymentMethodTronWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTronWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTronWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
