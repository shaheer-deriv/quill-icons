import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLitecoinBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLitecoinBrandIcon',
  component: PaymentMethodLitecoinBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLitecoinBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLitecoinBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
