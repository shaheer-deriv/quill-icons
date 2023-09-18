import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMoneygramWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMoneygramWhiteIcon',
  component: PaymentMethodMoneygramWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMoneygramWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMoneygramWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
