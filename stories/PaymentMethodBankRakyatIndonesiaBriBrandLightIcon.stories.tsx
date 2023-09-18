import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankRakyatIndonesiaBriBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankRakyatIndonesiaBriBrandLightIcon',
  component: PaymentMethodBankRakyatIndonesiaBriBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankRakyatIndonesiaBriBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankRakyatIndonesiaBriBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
