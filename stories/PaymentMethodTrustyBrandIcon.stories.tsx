import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTrustyBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTrustyBrandIcon',
  component: PaymentMethodTrustyBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTrustyBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTrustyBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
