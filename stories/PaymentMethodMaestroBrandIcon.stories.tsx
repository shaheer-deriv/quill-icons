import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMaestroBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMaestroBrandIcon',
  component: PaymentMethodMaestroBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMaestroBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMaestroBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
