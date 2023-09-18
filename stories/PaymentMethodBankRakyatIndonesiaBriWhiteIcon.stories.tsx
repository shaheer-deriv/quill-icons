import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankRakyatIndonesiaBriWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankRakyatIndonesiaBriWhiteIcon',
  component: PaymentMethodBankRakyatIndonesiaBriWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankRakyatIndonesiaBriWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankRakyatIndonesiaBriWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
