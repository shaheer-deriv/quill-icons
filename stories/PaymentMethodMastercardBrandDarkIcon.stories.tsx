import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMastercardBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMastercardBrandDarkIcon',
  component: PaymentMethodMastercardBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMastercardBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMastercardBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
