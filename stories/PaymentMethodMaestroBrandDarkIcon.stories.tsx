import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMaestroBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMaestroBrandDarkIcon',
  component: PaymentMethodMaestroBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMaestroBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMaestroBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
