import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymentAgentBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymentAgentBrandLightIcon',
  component: PaymentMethodPaymentAgentBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymentAgentBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymentAgentBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
