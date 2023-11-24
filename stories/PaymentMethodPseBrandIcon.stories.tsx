import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPseBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPseBrandIcon',
  component: PaymentMethodPseBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPseBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPseBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
