import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankRakyatIndonesiaBriBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankRakyatIndonesiaBriBrandIcon',
  component: PaymentMethodBankRakyatIndonesiaBriBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankRakyatIndonesiaBriBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankRakyatIndonesiaBriBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
