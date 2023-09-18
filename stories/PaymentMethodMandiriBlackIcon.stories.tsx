import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriBlackIcon',
  component: PaymentMethodMandiriBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
