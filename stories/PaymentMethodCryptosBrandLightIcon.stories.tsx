import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCryptosBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCryptosBrandLightIcon',
  component: PaymentMethodCryptosBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCryptosBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCryptosBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
