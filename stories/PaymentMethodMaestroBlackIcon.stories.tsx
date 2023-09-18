import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMaestroBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMaestroBlackIcon',
  component: PaymentMethodMaestroBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMaestroBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMaestroBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
