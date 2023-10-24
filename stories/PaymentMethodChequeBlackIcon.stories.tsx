import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChequeBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChequeBlackIcon',
  component: PaymentMethodChequeBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChequeBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChequeBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
