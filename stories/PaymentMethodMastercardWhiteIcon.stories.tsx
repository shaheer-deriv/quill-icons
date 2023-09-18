import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMastercardWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMastercardWhiteIcon',
  component: PaymentMethodMastercardWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMastercardWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMastercardWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
