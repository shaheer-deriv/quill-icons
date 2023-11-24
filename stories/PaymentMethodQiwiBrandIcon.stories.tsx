import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodQiwiBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodQiwiBrandIcon',
  component: PaymentMethodQiwiBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodQiwiBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodQiwiBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
