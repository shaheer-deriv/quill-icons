import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMandiriWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMandiriWhiteIcon',
  component: PaymentMethodMandiriWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMandiriWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMandiriWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
