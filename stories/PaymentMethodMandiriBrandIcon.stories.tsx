import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriBrandIcon',
  component: PaymentMethodMandiriBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
