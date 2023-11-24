import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMpesaBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMpesaBrandIcon',
  component: PaymentMethodMpesaBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMpesaBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMpesaBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
