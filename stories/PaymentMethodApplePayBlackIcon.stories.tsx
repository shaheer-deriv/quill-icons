import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodApplePayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodApplePayBlackIcon',
  component: PaymentMethodApplePayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodApplePayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodApplePayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
