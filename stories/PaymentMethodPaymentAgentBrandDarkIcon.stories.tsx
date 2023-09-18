import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymentAgentBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymentAgentBrandDarkIcon',
  component: PaymentMethodPaymentAgentBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymentAgentBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymentAgentBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
