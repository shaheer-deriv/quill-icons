import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriBrandDarkIcon',
  component: PaymentMethodMandiriBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
