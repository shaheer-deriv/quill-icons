import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymentAgentWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymentAgentWhiteIcon',
  component: PaymentMethodPaymentAgentWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymentAgentWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymentAgentWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
