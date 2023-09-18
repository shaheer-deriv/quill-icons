import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriBrandLightIcon',
  component: PaymentMethodMandiriBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
