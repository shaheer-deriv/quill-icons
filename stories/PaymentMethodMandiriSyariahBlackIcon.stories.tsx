import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriSyariahBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriSyariahBlackIcon',
  component: PaymentMethodMandiriSyariahBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriSyariahBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriSyariahBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
