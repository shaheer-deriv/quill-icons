import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMastercardBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMastercardBlackIcon',
  component: PaymentMethodMastercardBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMastercardBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMastercardBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
