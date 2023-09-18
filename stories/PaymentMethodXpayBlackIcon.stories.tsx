import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXpayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXpayBlackIcon',
  component: PaymentMethodXpayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXpayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXpayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
