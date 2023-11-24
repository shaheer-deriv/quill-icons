import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJetonBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJetonBrandIcon',
  component: PaymentMethodJetonBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJetonBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJetonBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
