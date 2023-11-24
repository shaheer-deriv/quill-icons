import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriSyariahBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriSyariahBrandIcon',
  component: PaymentMethodMandiriSyariahBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriSyariahBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriSyariahBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
