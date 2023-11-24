import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCryptosBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCryptosBrandIcon',
  component: PaymentMethodCryptosBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCryptosBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCryptosBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
