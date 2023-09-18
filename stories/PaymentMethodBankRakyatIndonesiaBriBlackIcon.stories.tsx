import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankRakyatIndonesiaBriBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankRakyatIndonesiaBriBlackIcon',
  component: PaymentMethodBankRakyatIndonesiaBriBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankRakyatIndonesiaBriBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankRakyatIndonesiaBriBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
