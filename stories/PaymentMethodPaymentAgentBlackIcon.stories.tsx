import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymentAgentBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymentAgentBlackIcon',
  component: PaymentMethodPaymentAgentBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymentAgentBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymentAgentBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
