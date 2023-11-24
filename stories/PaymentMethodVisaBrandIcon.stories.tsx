import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaBrandIcon',
  component: PaymentMethodVisaBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
