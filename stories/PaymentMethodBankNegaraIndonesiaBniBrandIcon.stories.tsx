import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankNegaraIndonesiaBniBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankNegaraIndonesiaBniBrandIcon',
  component: PaymentMethodBankNegaraIndonesiaBniBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankNegaraIndonesiaBniBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankNegaraIndonesiaBniBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
