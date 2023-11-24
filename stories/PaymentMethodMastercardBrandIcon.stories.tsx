import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMastercardBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMastercardBrandIcon',
  component: PaymentMethodMastercardBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMastercardBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMastercardBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
