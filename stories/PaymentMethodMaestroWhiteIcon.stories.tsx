import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMaestroWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMaestroWhiteIcon',
  component: PaymentMethodMaestroWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMaestroWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMaestroWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
