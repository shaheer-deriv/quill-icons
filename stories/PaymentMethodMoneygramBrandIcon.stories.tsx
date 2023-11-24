import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMoneygramBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMoneygramBrandIcon',
  component: PaymentMethodMoneygramBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMoneygramBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMoneygramBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
