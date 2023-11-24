import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGuaranteeTrustBankGtcoBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGuaranteeTrustBankGtcoBrandIcon',
  component: PaymentMethodGuaranteeTrustBankGtcoBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGuaranteeTrustBankGtcoBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGuaranteeTrustBankGtcoBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
