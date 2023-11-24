import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPermataBankBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPermataBankBrandIcon',
  component: PaymentMethodPermataBankBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPermataBankBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPermataBankBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
