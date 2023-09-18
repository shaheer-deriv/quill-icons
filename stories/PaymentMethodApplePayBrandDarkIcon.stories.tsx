import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodApplePayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodApplePayBrandDarkIcon',
  component: PaymentMethodApplePayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodApplePayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodApplePayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
