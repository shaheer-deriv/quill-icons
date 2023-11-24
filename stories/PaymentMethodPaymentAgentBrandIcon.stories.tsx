import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymentAgentBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymentAgentBrandIcon',
  component: PaymentMethodPaymentAgentBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymentAgentBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymentAgentBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
