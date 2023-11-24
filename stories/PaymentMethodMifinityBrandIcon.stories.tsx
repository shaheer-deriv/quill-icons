import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMifinityBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMifinityBrandIcon',
  component: PaymentMethodMifinityBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMifinityBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMifinityBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
