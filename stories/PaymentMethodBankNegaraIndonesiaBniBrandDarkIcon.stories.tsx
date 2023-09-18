import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankNegaraIndonesiaBniBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankNegaraIndonesiaBniBrandDarkIcon',
  component: PaymentMethodBankNegaraIndonesiaBniBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankNegaraIndonesiaBniBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankNegaraIndonesiaBniBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
