import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVerveBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVerveBrandIcon',
  component: PaymentMethodVerveBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVerveBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVerveBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
