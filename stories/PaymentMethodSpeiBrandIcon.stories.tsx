import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSpeiBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSpeiBrandIcon',
  component: PaymentMethodSpeiBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSpeiBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSpeiBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
