import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAlipayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAlipayBrandIcon',
  component: PaymentMethodAlipayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAlipayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAlipayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
