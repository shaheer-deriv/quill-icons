import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIdealBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIdealBrandIcon',
  component: PaymentMethodIdealBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIdealBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIdealBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
