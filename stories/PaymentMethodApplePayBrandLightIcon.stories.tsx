import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodApplePayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodApplePayBrandLightIcon',
  component: PaymentMethodApplePayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodApplePayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodApplePayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
