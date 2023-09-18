import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMaestroBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMaestroBrandLightIcon',
  component: PaymentMethodMaestroBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMaestroBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMaestroBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
