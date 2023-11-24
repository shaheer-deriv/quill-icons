import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMtnBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMtnBrandIcon',
  component: PaymentMethodMtnBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMtnBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMtnBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
