import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGuaranteeTrustBankGtcoBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGuaranteeTrustBankGtcoBlackIcon',
  component: PaymentMethodGuaranteeTrustBankGtcoBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGuaranteeTrustBankGtcoBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGuaranteeTrustBankGtcoBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
