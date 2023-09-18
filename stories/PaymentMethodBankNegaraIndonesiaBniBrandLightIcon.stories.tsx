import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankNegaraIndonesiaBniBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankNegaraIndonesiaBniBrandLightIcon',
  component: PaymentMethodBankNegaraIndonesiaBniBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankNegaraIndonesiaBniBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankNegaraIndonesiaBniBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
