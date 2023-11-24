import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFpsBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFpsBrandIcon',
  component: PaymentMethodFpsBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFpsBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFpsBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
