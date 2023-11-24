import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayLivreBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayLivreBrandIcon',
  component: PaymentMethodPayLivreBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayLivreBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayLivreBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
