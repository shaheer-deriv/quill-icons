import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGuaranteeTrustBankGtcoBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGuaranteeTrustBankGtcoBrandLightIcon',
  component: PaymentMethodGuaranteeTrustBankGtcoBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGuaranteeTrustBankGtcoBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGuaranteeTrustBankGtcoBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
