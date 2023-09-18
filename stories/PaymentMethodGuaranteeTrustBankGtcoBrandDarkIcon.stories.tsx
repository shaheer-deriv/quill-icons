import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGuaranteeTrustBankGtcoBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGuaranteeTrustBankGtcoBrandDarkIcon',
  component: PaymentMethodGuaranteeTrustBankGtcoBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGuaranteeTrustBankGtcoBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGuaranteeTrustBankGtcoBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
