import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMifinityBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMifinityBlackIcon',
  component: PaymentMethodMifinityBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMifinityBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMifinityBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
