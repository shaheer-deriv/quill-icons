import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriSyariahWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriSyariahWhiteIcon',
  component: PaymentMethodMandiriSyariahWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriSyariahWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriSyariahWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
