import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCryptosBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCryptosBrandDarkIcon',
  component: PaymentMethodCryptosBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCryptosBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCryptosBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
