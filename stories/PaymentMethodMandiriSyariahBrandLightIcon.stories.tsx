import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriSyariahBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriSyariahBrandLightIcon',
  component: PaymentMethodMandiriSyariahBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriSyariahBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriSyariahBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
