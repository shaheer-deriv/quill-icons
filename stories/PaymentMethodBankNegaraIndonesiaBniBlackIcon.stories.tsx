import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankNegaraIndonesiaBniBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankNegaraIndonesiaBniBlackIcon',
  component: PaymentMethodBankNegaraIndonesiaBniBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankNegaraIndonesiaBniBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankNegaraIndonesiaBniBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
