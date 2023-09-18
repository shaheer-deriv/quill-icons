import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankRakyatIndonesiaBriBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankRakyatIndonesiaBriBrandDarkIcon',
  component: PaymentMethodBankRakyatIndonesiaBriBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankRakyatIndonesiaBriBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankRakyatIndonesiaBriBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
