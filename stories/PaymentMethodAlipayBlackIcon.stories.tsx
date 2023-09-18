import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAlipayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAlipayBlackIcon',
  component: PaymentMethodAlipayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAlipayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAlipayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
