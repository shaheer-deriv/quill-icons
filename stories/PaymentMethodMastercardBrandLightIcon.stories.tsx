import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMastercardBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMastercardBrandLightIcon',
  component: PaymentMethodMastercardBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMastercardBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMastercardBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
