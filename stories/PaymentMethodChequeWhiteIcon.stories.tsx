import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChequeWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChequeWhiteIcon',
  component: PaymentMethodChequeWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChequeWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChequeWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
