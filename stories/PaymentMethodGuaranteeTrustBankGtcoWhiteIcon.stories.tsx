import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGuaranteeTrustBankGtcoWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGuaranteeTrustBankGtcoWhiteIcon',
  component: PaymentMethodGuaranteeTrustBankGtcoWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGuaranteeTrustBankGtcoWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGuaranteeTrustBankGtcoWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
