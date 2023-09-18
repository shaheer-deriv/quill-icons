import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAlipayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAlipayWhiteIcon',
  component: PaymentMethodAlipayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAlipayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAlipayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
