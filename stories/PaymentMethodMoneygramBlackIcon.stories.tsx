import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMoneygramBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMoneygramBlackIcon',
  component: PaymentMethodMoneygramBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMoneygramBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMoneygramBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
