import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriSyariahBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriSyariahBrandDarkIcon',
  component: PaymentMethodMandiriSyariahBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriSyariahBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriSyariahBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
