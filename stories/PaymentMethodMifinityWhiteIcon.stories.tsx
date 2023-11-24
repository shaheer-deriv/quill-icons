import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMifinityWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMifinityWhiteIcon',
  component: PaymentMethodMifinityWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMifinityWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMifinityWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
