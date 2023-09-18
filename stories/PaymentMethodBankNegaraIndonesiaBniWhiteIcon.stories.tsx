import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankNegaraIndonesiaBniWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankNegaraIndonesiaBniWhiteIcon',
  component: PaymentMethodBankNegaraIndonesiaBniWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankNegaraIndonesiaBniWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankNegaraIndonesiaBniWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
