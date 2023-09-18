import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPrzelewy24WhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPrzelewy24WhiteIcon',
  component: PaymentMethodPrzelewy24WhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPrzelewy24WhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPrzelewy24WhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
