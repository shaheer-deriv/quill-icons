import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFasapayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFasapayBrandIcon',
  component: PaymentMethodFasapayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFasapayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFasapayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
